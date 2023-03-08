import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './module';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) { }
  getPosts(): Observable<Post[]>{
    return this.client.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPost(id: number): Observable<Post>{
    return this.client.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
