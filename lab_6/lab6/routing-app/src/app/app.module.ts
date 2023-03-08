import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http"
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
// import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    // MyComponent
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    PostsComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    // CommonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    // APP_ROUTES,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
