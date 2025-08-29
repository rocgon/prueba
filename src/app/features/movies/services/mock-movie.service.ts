import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from './movie.service';


let AUTO_ID = 3;
let DATA: Movie[] = [
    { id: 1, title: 'Ada Lovelace', release_date: new Date('12/01/2001'), poster_path: '', idiom:'en', overview:'pelicula inventada de mis alucines'},
    { id: 2, title: 'resident evil', release_date: new Date('12/02/2001'), poster_path: '', idiom:'en', overview:'pelicula basada en el videojuego de zombies'},
    { id: 3, title: 'the shining', release_date: new Date('12/03/2001'), poster_path: '', idiom:'en', overview:'pelicula de un viejo neurotico que se vuelve mas loco'},
    { id: 4, title: 'Rambo', release_date: new Date('12/01/2021'), poster_path: '', idiom:'en', overview:'pelicula que refleja lo alucines que estan los gringos'},
    { id: 5, title: 'The permume', release_date: new Date('12/01/1901'), poster_path: '', idiom:'en', overview:'Pelicula de un vato que huele mucho pero no tiene olor'},
    { id: 6, title: 'Drácula', release_date: new Date('12/01/1921'), poster_path: '', idiom:'en', overview:'pelicula sobre un mosquito que ataca por la noche'},
    { id: 7, title: 'the mummy', release_date: new Date('12/01/2001'), poster_path: '', idiom:'en', overview:'pelicula de una momia enamorada'},
    { id: 8, title: '28 days later', release_date: new Date('12/01/2001'), poster_path: '', idiom:'en', overview:'pelicula subestimada de zombies'},
];

@Injectable()
export class MockMovieService implements MovieService {
    private net() { return 300; } // ms de "latencia"

    list(): Observable<Movie[]> {
        return of([...DATA]).pipe(delay(this.net()));
    }

    search(title: string): Observable<Movie[]> {
        console.log('🎯 MockMovieService.search llamado con:', title);
        const results = DATA.filter(movie =>
            movie.title.toLowerCase().includes(title.toLowerCase())
        );
         console.log('📋 Resultados filtrados:', results);
        // simular petición HTTP con retraso
        return of(results);
        // si quieres simular retardo de red:
        // return of(results).pipe(delay(500));
    }
}