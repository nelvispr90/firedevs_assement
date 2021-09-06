import threading
from django.utils.deprecation import MiddlewareMixin

class RequestMiddleware(MiddlewareMixin):
    thread_local = threading.local()

    def __init__(self, get_response=None):
        super().__init__(get_response)
        
    def __call__(self, request):
        # Almacenamos en el usuario que esta en el request
        self.thread_local.user = request.user
        response = self.get_response(request)
        return response