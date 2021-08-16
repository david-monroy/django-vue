from rest_framework import routers

from .viewsets import ParticipanteViewset

router = routers.SimpleRouter()
router.register('participantes', ParticipanteViewset)

urlpatterns = router.urls