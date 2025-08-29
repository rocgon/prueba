import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, startWith, map } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MockMovieService } from '../services/mock-movie.service';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movies.html',
  providers: [MockMovieService] // Inyectamos el mock
})
export class MoviesComponent {
  searchCtrl = new FormControl('');
  movies$: Observable<Movie[]> = of([]);
//  movies: Movie[] = []; // valor interno
  pagedMovies$: Observable<Movie[]> = of([]);          // películas visibles en la página actual
  selectedMovie: Movie|null = null;

  currentPage = 1;
  pageSize = 2;                       // número de películas por página
  totalPages = 1;

  constructor(private movieSvc: MockMovieService) {
    this.movies$ = this.searchCtrl.valueChanges.pipe(
      startWith(''), // emite inmediatamente al cargar
      debounceTime(300),
      distinctUntilChanged(),
      tap(value => console.log('🔎 Input:', value)),
      switchMap(title => title ? this.movieSvc.search(title) : this.movieSvc.list()),
      tap(result => console.log('✅ Resultado final al template:', result))
    );
    
    this.pagedMovies$ = this.movies$.pipe(
      map(movies => {
        this.totalPages = Math.ceil(movies.length / this.pageSize);
        return movies.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
      }));
  }

  updatePagedMovies() {
    this.pagedMovies$ = this.movies$.pipe(
    map(movies => {
    this.totalPages = Math.ceil(movies.length / this.pageSize);
    return movies.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  })
);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedMovies();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedMovies();
    }
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = null;
  }
}
