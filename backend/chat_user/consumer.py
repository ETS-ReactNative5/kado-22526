import json
import logging
from channels.generic.websocket import AsyncWebsocketConsumer
from django.core.serializers.json import DjangoJSONEncoder
from chat_user.api.v1.serializers import MessageSerializer
from chat_user.models import Thread, Message
from core.aws import S3
from core.utils.file_utils import decode_base64_file

logger = logging.getLogger(__name__)


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        if self.scope.get('user').is_anonymous:
            # only allow authenticated users to receive messages
            await self.close(code=4123)

        self.thread_id = self.scope.get('url_route', {}).get('kwargs', {}).get('thread_id')
        self.room_group_name = 'chat_%s' % self.thread_id

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):

        if self.scope.get('user').is_anonymous:
            # only allow authenticated users to receive messages
            await self.close(code=4123)

        user = self.scope.get('user')

        text_data_json = json.loads(text_data)
        message = text_data_json.get('message', '')
        to_profile_ids = text_data_json.get('to_profile_ids', '')
        attachment = text_data_json.get('attachment', '')
        profile = user.profile
        data = {
            'thread_id': self.thread_id,
            'to_profile_ids': to_profile_ids,
            'content': message,
            'attachment': attachment
        }

        if attachment:
            io_file, file_name = decode_base64_file(attachment)
            upload_response = S3.upload_base64({'data': io_file, 'file_name': file_name})
            data['attachment'] = upload_response

        validated_data = MessageSerializer(data=data)
        msg = Message()
        if validated_data.is_valid():
            subject = 'DEFAULT SUBJECT'
            thread_id = data.get('thread_id', 0)
            if int(thread_id) == 0:  # two profiles should always have one thread
                thread_qs = Thread.objects.filter(thread_member__profile__in=[profile.id]).filter(
                    profiles__in=to_profile_ids)
                if thread_qs.exists():
                    thread_id = thread_qs.first().id
            thread = None
            if thread_id:
                thread_qs = Thread.objects.filter(id=thread_id)
                if thread_qs.exists():
                    thread = thread_qs.first()
            if thread:
                msg = Message.new_reply(
                    profile=profile,
                    thread=thread,
                    content=data.get('content', ''),
                    attachment=data.get('attachment')
                )
            else:
                if len(data.get('to_profile_ids', [])) == 0:
                    logger.warning(msg="Recipients (to_profile_ids), profile ids.")
                    pass  # TODO: notify the socket client that adding a message failed
                msg = Message.new_message(
                    profile,
                    to_profiles=data.get('to_profile_ids'),
                    subject=subject,
                    content=data.get('content', ''),
                    attachment=data.get('attachment')
                )
            logger.warning('Message %s, saved successfully' % msg.content)
        else:
            logger.error(msg='Message data not valid: errors' + str(validated_data.errors))

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'thread_id': msg.thread.id,
                'sender_id': profile.id,
                'image': data.get('attachment'),
                'username': user.username,
                '_id': msg.id,
                'text': message,
                'createdAt': msg.sent_at.isoformat(),
                'threadId': msg.thread.id,
                'user': {
                    '_id': profile.id,
                    'name': msg.thread.receiver_profiles(profile.id, True).fullname(),
                    'avatar': msg.thread.receiver_profiles(profile.id, True).photo,
                }

            }
        )

    # Receive message from room group
    async def chat_message(self, event):

        # Send message to WebSocket
        await self.send(text_data=json.dumps(event, cls=DjangoJSONEncoder))
