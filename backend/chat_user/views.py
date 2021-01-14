from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'chat/index.html'


class ThreadView(TemplateView):
    template_name = 'chat/thread.html'

    def get_context_data(self, **kwargs):
        context = super(ThreadView, self).get_context_data(**kwargs)
        context['title'] = 'Chat Room'
        return context


