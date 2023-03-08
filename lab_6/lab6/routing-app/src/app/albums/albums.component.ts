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
  constructor(private albumService: AlbumsService){
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums: Album[]) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album: Album) => {
      console.log(album);
    })
  }
}
