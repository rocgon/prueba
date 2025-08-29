import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";  
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { MovieService } from './movie.service';
import { environment } from '../../../../../environments/environment';

interface TmdbResponse {
  results: any[];
}

@Injectable()
export class HttpMovieService implements MovieService{//implementacion de User service que son la definición de metodos
    private base = `${environment.apiMovieUrl}/users`;
    constructor(private http: HttpClient){}
    list(): Observable<Movie[]>{
        return this.http.get<Movie[]>(this.base);
    }
    

    update(id: number, dto: Partial<Omit<Movie, "id">>): Observable<Movie> {
        return this.http.patch<Movie>(`${this.base}/${id}`, dto).pipe(
        catchError(err => throwError(() => new Error(err?.error?.message || 'Error al actualizar'))) );
    }

    search(title: string, page = 1): Observable<Movie[]> {
        const params = {
            api_key: environment.apiKey,
            query: title,
            page: page.toString()
        };
    return this.http.get<TmdbResponse>(this.base, { params })
      .pipe(
        map(resp => resp.results.map(item => ({
          id: item.id,
          title: item.title,
          release_date: item.release_date,
          poster_path: item.poster_path,
          idiom: item.idiom,
          overview: item.overview,
        })))
      );
  }
}