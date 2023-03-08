import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Photo } from '../module2'; 
import { PhotosService } from '../photos.service';
import { Params } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  photos: Photo[] = [];
  photo: Photo;
  loaded: boolean;
  constructor(private _location: Location, private route: ActivatedRoute, private photoService: PhotosService ){
    this.photo = {} as Photo;
    this.loaded = true;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.photoService.getPhotos(id).subscribe((photos: Photo[]) =>{
      this.photos = photos;
      this.loaded = true;
    });
    } )
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const id = Number(params.get('id'));
    //   this.loaded = false;
    //   this.photoService.getPhoto(id).subscribe((photo: Photo) => {
    //     this.photo = photo;
    //     this.loaded = true;
    //   });
    // } )
  }
  backClicked() {
    this._location.back();
  };
}
