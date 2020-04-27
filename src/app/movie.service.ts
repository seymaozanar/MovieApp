import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { LoggingService } from './logging.service';
import { Observable } from 'rxjs';
import { Movie } from './movies/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl='api/movies';
  constructor(
    private loggingService:LoggingService,
    private http: HttpClient
  ) { }

  getMovieFromService():Observable<Movie[]>{
    
    this.loggingService.add('Movie service: listing movies')
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }
  getMovie(id):Observable<Movie>{
    this.loggingService.add('Movie Service : Listing movies');
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }
  update(movie:Movie):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put(this.apiMoviesUrl,movie,httpOptions)
 
  }
  add(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.apiMoviesUrl,movie);
  }
  delete(movie:Movie):Observable<Movie>{
    return this.http.delete<Movie>(this.apiMoviesUrl+'/'+movie.id);
  }
}
