from django.conf.urls import url
from api.views import auth_views, data_views, product_views

urlpatterns = [
    ### 인증 url 
    url('auth/signup/$', auth_views.signup, name='sign_up'),
    url('auth/login/$', auth_views.login, name='login'),
    url('auth/session/$', auth_views.session, name='session'),
    url('auth/logout/$', auth_views.logout, name='logout'),

    ### 데이터 DB 저장 url 
    url('data/functions/$', data_views.functions, name='data_functions'),
    url('data/ingredients/$', data_views.ingredients, name='data_ingredients'),
    url('data/products/$', data_views.products, name='data_products'),

    ### serializer url
    url('serializer/product/$', product_views.product, name='product'),
    url('serializer/function/$', product_views.function, name='function'),
    url('serializer/ingredient/$', product_views.ingredient, name='ingredient'),

    # url('data/test/$', data_views.test), #테스트코드

]
