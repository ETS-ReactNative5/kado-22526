import os
import boto3
from botocore.config import Config
from django.conf import settings

AWS_ACCESS_KEY_ID = settings.AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = settings.AWS_SECRET_ACCESS_KEY
BUCKET_NAME = settings.AWS_STORAGE_BUCKET_NAME
AWS_STORAGE_REGION = settings.AWS_STORAGE_REGION

AWS_CONFIG = Config(
    region_name=settings.AWS_STORAGE_REGION,
    signature_version='v4',
    retries={
        'max_attempts': 10,
        'mode': 'standard'
    }
)
KEY = os.urandom(32)


class AWS(object):
    def __init__(
            self, aws_config=AWS_CONFIG,
            bucket_name=BUCKET_NAME,
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
            aws_storage_region=AWS_STORAGE_REGION, ):
        self.aws_config = aws_config
        self.bucket_name = bucket_name
        self.aws_access_key_id = aws_access_key_id
        self.aws_secret_access_key = aws_secret_access_key
        self.aws_storage_region = aws_storage_region


class S3(AWS):
    OBJECT_NAME = 'S3'

    def __init__(self, *args, **kwargs):
        super(S3, self).__init__(*args, **kwargs)

        self.s3 = boto3.resource('s3', aws_access_key_id=self.aws_access_key_id,
                                 aws_secret_access_key=self.aws_secret_access_key)
        self.client = boto3.client('s3', aws_access_key_id=self.aws_access_key_id,
                                   aws_secret_access_key=self.aws_secret_access_key)

    @classmethod
    def buckets(cls):
        return cls()._get_buckets()

    def _get_buckets(self):
        return [bucket.file for bucket in self.s3.Bucket(self.bucket_name).objects.all()]

    @classmethod
    def upload_file(cls, payload):
        return cls()._upload_file(payload)

    def _upload_file(self, payload):
        try:
            self.client.upload_fileobj(
                payload.get('data'),
                self.bucket_name,
                payload.get('file_name'),
                ExtraArgs={'ACL': 'public-read'}

            )
            return f"https://{self.bucket_name}.s3.amazonaws.com/{payload.get('data')}"
        except:
            return ''
