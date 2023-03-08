import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
import { POSTS } from '../fake-db';
import { Post } from '../module';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
// imprt {POSTS}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: Post[] = [];
  loaded: boolean;
  newPost: Post;
  constructor(private postService: PostService){
    this.posts = [];
    this.loaded = true;
    this.newPost = {} as Post;
  }
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    // this.posts = POSTS
    this.loaded = false;
    // this.posts = POSTS;
    // this.posts = this.postService.getPosts();
    this.postService.getPosts().subscribe((posts: Post[]) =>{
      this.posts = posts;
      this.loaded = true;
    });
  }
  addPost(){
    // this.newPost.body = this.
    this.postService.addPost(this.newPost).subscribe((post: Post) => {
      console.log(post);
    })
    // console.log(this.newPost);
  }
}
