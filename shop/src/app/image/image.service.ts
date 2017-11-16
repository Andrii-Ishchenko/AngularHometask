import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  private imageSources : Array<string>;
  private defaultImageSrc : string;
  private prefix : string;
  constructor() { 

    this.prefix = "/assets/images/";
    this.defaultImageSrc = "default.jpg"

    this.imageSources = [
      "odyssey.jpg",
      "war and peace.jpg",
      "titanic.jpg",
      "doom.jpg"
    ]
  }

  getImageSrcById(id : number) : string {
    if( id < 0 || id >= this.imageSources.length)
      return this.prefix + this.defaultImageSrc;

      return this.prefix + this.imageSources[id];
  }
  
}
