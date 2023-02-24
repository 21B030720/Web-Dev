// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeroesComponent } from './heroes/heroes.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeroesComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// import { AppComponent } from './app.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { TopBarComponent } from './top-bar/top-bar.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeroesComponent,
//     HeroDetailComponent,
//     ProductListComponent,
//     TopBarComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './products';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
// import {Light};
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { ProductDetailsComponent } from 'products/:productId';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';


@NgModule({
  imports: [
    // LightboxModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoriesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
