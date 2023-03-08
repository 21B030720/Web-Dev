import { Component, OnInit } from '@angular/core';
import { Album } from '../module1';
import { AlbumsService } from '../albums.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[] = [];
  loaded: boolean;
  newAlbum: Album;
  constructor(private postService: AlbumsService){
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.postService.getAlbums().subscribe((albums: Album[]) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(){
    this.postService.addAlbum(this.newAlbum).subscribe((post: Album) => {
      console.log(post);
    })
  }
}
