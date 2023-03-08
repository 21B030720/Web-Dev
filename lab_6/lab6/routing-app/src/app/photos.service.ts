import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './module2'; 
import { CommonModule } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  BASE_URL: string;
  constructor(private client: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com';
   }
  getPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }
  getPhoto(id: number): Observable<Photo>{
    return this.client.get<Photo>(`${this.BASE_URL}/albums/${id}/photos/${id}`);
  }
  // addPhoto(photo: Photo): Observable<Photo>{
  //   return this.client.post<Photo>(`${this.BASE_URL}/albums/1/photos`, photo);
  // }
}
