#Para hacer un crud: actualizar, crear, consultar y eliminar historia
from rest_framework import viewsets
from .models import Historia
from .serializer import HistoriaSerializer

class HistoriaViewSet(viewsets.ModelViewSet):
    queryset = Historia.objects.all()
    serializer_class = HistoriaSerializer 