import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie;
  constructor(private movieService:MovieService,  
    private route:ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getMovie();
  }
  getMovie():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
    .subscribe(
      movie=> this.movie=movie
    );
  }
  save():void{
    this.movieService.update(this.movie).subscribe(
      ()=>{
        this.location.back();
      }
    );
  }


}
