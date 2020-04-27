import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const movies= [
      {id:1,name:'Minions',description:'Güzel film',imageUrl:'minions.jpg'},
      {id:2,name:'Shrek',description:'Güzel film',imageUrl:'shrek.jpg'},
      {id:3,name:'Toy Story',description:'Mükoooo film',imageUrl:'toy.jpg'},
      
      ];
      return {movies};
  }

}
