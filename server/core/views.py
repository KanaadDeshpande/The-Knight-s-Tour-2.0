from rest_framework.views import APIView
from rest_framework.response import Response
from .ciphers.encryption import encrypt, decrypt

# Create your views here.


class EncryptView(APIView):
    def post(self, request):
        sentence = request.data
        encryptedString = encrypt(sentence["data"])
        return Response({"data": encryptedString})


class DecryptView(APIView):
    def post(self, request):
        sentence = request.data
        decryptedString = decrypt(sentence["data"])
        return Response(decryptedString)
