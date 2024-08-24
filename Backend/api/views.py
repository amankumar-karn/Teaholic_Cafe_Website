from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework.exceptions import ValidationError
from .models import CartItem, Product
from .serializer import CartItemSerializer, MyTokenObtainPairSerializer, RegisterSerializer, ProductSerializer

class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        product_id = self.request.data.get('product_id')
        quantity = self.request.data.get('quantity', 1)

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            raise ValidationError({'product_id': 'Product does not exist.'})

        cart_item, created = CartItem.objects.get_or_create(user=self.request.user, product=product)
        if not created:
            cart_item.quantity += int(quantity)
            cart_item.save()

        serializer.instance = cart_item
        serializer.save(user=self.request.user)

    def perform_destroy(self, instance):
        instance.delete()

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

class RegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/token/refresh/',
        '/api/register/',
        '/api/test/',
        '/api/cart/',
        '/api/product/<int:product_id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def testEndPoint(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def getProduct(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({'detail': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ProductSerializer(product)
    return Response(serializer.data, status=status.HTTP_200_OK)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    quantity = request.data.get('quantity', 1)
    
    if not product_id:
        return Response({'error': 'Product ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({'error': 'Product does not exist.'}, status=status.HTTP_404_NOT_FOUND)
    
    cart_item, created = CartItem.objects.get_or_create(
        user=request.user,
        product=product,
        defaults={'quantity': quantity}
    )
    if not created:
        cart_item.quantity += int(quantity)
        cart_item.save()
    
    return Response({'message': 'Product added to cart successfully.'}, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def remove_from_cart(request, product_id):
    try:
        cart_item = CartItem.objects.get(user=request.user, product__id=product_id)
        cart_item.delete()
        return Response({'message': 'Item removed from cart successfully.'}, status=status.HTTP_204_NO_CONTENT)
    except CartItem.DoesNotExist:
        return Response({'error': 'Item does not exist in cart.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_cart_items(request):
    cart_items = CartItem.objects.filter(user=request.user)
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
