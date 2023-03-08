import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Album } from './module';
import { Album } from './module1';
import { Photo } from './module2';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string;
  constructor(private client: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com';
   }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }
  getPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  // editAlbum(album: Album): Observable<Album>{
  //   return this.client.<Album>(`${this.BASE_URL}/albums`, album);
  // }
  addAlbum(album: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }
}
