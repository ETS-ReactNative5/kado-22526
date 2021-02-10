from django.db import close_old_connections
from django.contrib.auth.models import AnonymousUser
from rest_auth.models import TokenModel
from urllib.parse import parse_qs

from channels.db import database_sync_to_async


@database_sync_to_async
def get_user(token):
    try:
        return TokenModel.objects.get(key=token).user
    except:
        return AnonymousUser()


class TokenAuthMiddleware:
    """
    Custom token auth middleware
    """

    def __init__(self, app):
        # Store the ASGI application we were passed
        self.app = app

    async def __call__(self, scope, receive, send):
        # Close old database connections to prevent usage of timed out connections
        close_old_connections()

        # Get the token
        try:
            token = parse_qs(scope["query_string"].decode("utf8"))["token"][0]
        except:
            token = ''

        # Try to authenticate the user
        scope['user'] = await get_user(token)
        return await self.app(scope, receive, send)
