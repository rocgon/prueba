import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })//para toda la aplicación

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.html'
})
export class MovieDetailComponent {
  movie$: Movie=
  { id: 1, 
    title: 'Ada Lovelace', 
    release_date: new Date('12/01/2001'), 
    poster_path: '', 
    idiom:'en', 
    overview:'pelicula inventada de mis alucines'};
  
  constructor(private route: ActivatedRoute) {
  }
  getMovieDetails(movie:Movie){
    this.movie$ = {...movie};
  }
}
