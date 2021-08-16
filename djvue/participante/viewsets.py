# Realizar CRUD sobre objetos

from rest_framework import viewsets
from .models import Participante
from .serializers import ParticipanteSerializer

class ParticipanteViewset(viewsets.ModelViewSet):
    queryset = Participante.objects.all()
    serializer_class = ParticipanteSerializer