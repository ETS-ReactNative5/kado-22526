from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from chat_user.routing import websocket_urlpatterns
from core.middlewares import TokenAuthMiddleware

application = ProtocolTypeRouter({
    "websocket": TokenAuthMiddleware(
        URLRouter(
            websocket_urlpatterns
        )
    )
})
