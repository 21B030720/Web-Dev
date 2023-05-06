// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Product, products } from '../products';
// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { products } from '../products';
import { Product, products } from '../products';
import { Category, categories } from '../categories';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  constructor(private route: ActivatedRoute) { }
  categoryId: number = 0;
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
  
    // Find the product that correspond with the id provided in route.
    this.categoryId = categoryIdFromRoute;
  }
  like(product: Product){
    product.like++;
  }
  delete(product: Product){
    product.appear = false;
  }
}
