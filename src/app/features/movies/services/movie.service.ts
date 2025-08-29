import { Observable } from "rxjs";
import { Movie } from "../models/movie.model";
export abstract class MovieService{
    abstract list(): Observable<Movie[]>;
    abstract search(title:string): Observable<Movie[]>;
}