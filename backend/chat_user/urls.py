from django.urls import path

from .views import IndexView, ThreadView

app_name = 'chat_user'
urlpatterns = [
    path('', IndexView.as_view(), name='chat_index_view'),
    path('<int:thread_id>/', ThreadView.as_view(), name='thread_view'),
]
