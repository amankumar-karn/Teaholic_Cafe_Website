from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CartItemViewSet, MyTokenObtainPairView, RegisterView,ProductViewSet, getRoutes, testEndPoint, getProduct,add_to_cart,get_cart_items,remove_from_cart
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'cart', CartItemViewSet, basename='cart')
router.register(r'products', ProductViewSet)


urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('test/', testEndPoint, name='test'),
    path('', getRoutes, name='routes'),
    path('product/<int:product_id>/', getProduct, name='get_product'), 
    path('api/cart/add/', add_to_cart, name='add_to_cart'),
    path('api/cart/remove/<int:product_id>/', remove_from_cart, name='remove_from_cart'),
    path('api/cart/', get_cart_items, name='get_cart_items'),
    path('', include(router.urls)),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
