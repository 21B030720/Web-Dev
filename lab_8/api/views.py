from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Product, Category
# Create your views here.
products = [
    {
        'name': f"{_id}",
        'price': _id * _id,
        'description': "Description",
        'count': _id,
        'is_active': True,
        # 'id': _id,
        # 'name': f'Product {_id}',
        # 'price': _id * 1000
    }
    for _id in range(1, 10)
]
categories = [
    {
        'name': f"{_id}",
    }
    for _id in range(1, 10)
]

def listAllProducts(request):
    return HttpResponse(f"<h1 style='color: red;'>There must be all lists</h1>")
def productDetail(request, productId):
    for product in products:
        if product['id'] == productId:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})
def product_list(request):
    return JsonResponse(products, safe=False)
def category_list(request):
    return JsonResponse(products, safe=False)
def categoryDetail(request, id):
    for product in products:
        if product['id'] == id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})


#
#
#
#
#
#
#
def productInsert(request):
    # m = Product(name = 'ramazan', price = 1000, description = "I am krutoi",
    #                 count = 10,
    #                 is_active = True)
    # m.save()


    # for product in products:
    #     m = Product(name = product['name'], price = product['price'], description = product['description'],
    #                 count = product['count'],
    #                 is_active = product['is_active'])
    #     m.save()

    m = Product(name='Arslan_loh', price=1000, description="I am krutoi",
                    count = 10,
                    is_active = True)
    m.save()
    print("updated")
    return HttpResponse(f"<h1 style='color: red;'>Products in data have worked</h1>")

def categoryInsert(request):
    for category in categories:
        m = Category(name = category['name'])
        m.save()
    return HttpResponse(f"<h1 style='color: red;'>Categories in data have worked</h1>")
def allproductsGet(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
    # print(products)
    # return HttpResponse(products)
def certainProductGet(request, productId):
    products = Product.objects.filter(id = productId)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
    # print(products)
    # return HttpResponse(f"<h1 style='color: red;'>Only one product is in terminal</h1>")
def allcategoriessGet(request):
    categories = Category.objects.all()
    categories_json = [p.to_json() for p in categories]
    return JsonResponse(categories_json, safe=False)
    # print(categories)
    # return HttpResponse(f"<h1 style='color: red;'>All categories are in terminal</h1>")
def certainCategoryGet(request, id):
    categories = Category.objects.filter(id=id)
    categories_json = [p.to_json() for p in categories]
    return JsonResponse(categories_json, safe=False)
    # print(categories)
    # return HttpResponse(f"<h1 style='color: red;'>Only one category is in terminal</h1>")
def categoryProductGet(request, id):
    categories = Category.objects.filter(id=id)
    categories_json = [p.to_json() for p in categories]
    products = Product.objects.filter(name = categories_json[0]['name'])
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

# def category
# def product_list(request):
#     # select * from api_product;
#     products = Product.objects.all()
#     products_json = [p.to_json() for p in products]
#     return JsonResponse(products_json, safe=False)