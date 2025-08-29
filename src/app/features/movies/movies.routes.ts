import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-details.component';
import { MoviesComponent } from './component/movies.component';

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: ':details', component: MovieDetailComponent },
];