import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { POSTS } from '../fake-db';
import { Post } from '../module';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  post: Post;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private postService: PostService ){
    this.post = {} as Post;
    this.loaded = true;
  }
  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.postService.getPost(id).subscribe((post: Post) => {
        this.post = post;
        this.loaded = true;
      });
      // this.post = POSTS.find((post: Post) => post.id === id) as Post;

    } )
    // this.post = POSTS.find((post: Post) => post.id === id) as Post;
    // console.log(this.route.snapshot.paramMap.get('id'));
  }
}
