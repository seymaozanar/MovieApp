import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Movies} from '../movie.datasource';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title='Movies';
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  movies=Movies;
  selectedMovie:Movie;

  onSelect(movie:Movie):void{
    this.selectedMovie=movie;
  }

  getMovies():void{
    this.movieService.getMovieFromService().subscribe(
      movies=>{this.movies=this.movies;}
    );
  }
  add(name:string,imageUrl:string,description:string):void{
    this.movieService.add({
      name,
      imageUrl,
      description
    } as Movie).subscribe(movie=>this.movies.push(movie));
  }
  delete(movie:Movie):void{
    this.movies=this.movies.filter(m=>m!==movie);
    this.movieService.delete(movie).subscribe();
  }

}
