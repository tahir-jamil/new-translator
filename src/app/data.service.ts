import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

constructor() { }

  data = [
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"},
    { english:"book", chinese: "chinese", img: "chair.png"}
  ]
}
