from django.urls import path
from .views import EncryptView, DecryptView

urlpatterns = [
    path("encrypt/", EncryptView.as_view(), name="encrypt_view"),
    path("decrypt/", DecryptView.as_view(), name="decrypt_view"),
]
