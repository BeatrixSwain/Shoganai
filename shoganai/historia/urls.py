from rest_framework import routers
from .viewsets import HistoriaViewSet

router = routers.SimpleRouter()#Define las clases para los modelos, get, post, put, etc...
router.register('historias', HistoriaViewSet)

urlpatterns = router.urls
