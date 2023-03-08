// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { POSTS } from '../fake-db';
// import { Post } from '../module';
// import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { Album } from '../module1';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: Album;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService ){
    this.album = {} as Album;
    this.loaded = true;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album: Album) => {
        this.album = album;
        this.loaded = true;
      });
    } )
  }
}
