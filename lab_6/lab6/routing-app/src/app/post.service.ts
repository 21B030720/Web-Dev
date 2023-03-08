import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './module';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL: string;
  constructor(private client: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com';
   }
  getPosts(): Observable<Post[]>{
    return this.client.get<Post[]>(`${this.BASE_URL}/posts`)
  }
  getPost(id: number): Observable<Post>{
    return this.client.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }
  addPost(post: Post): Observable<Post>{
    return this.client.post<Post>(`${this.BASE_URL}/posts`, post);
  }
}
