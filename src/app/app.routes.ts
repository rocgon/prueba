import { Routes } from '@angular/router';

export const routes: Routes = [
        { path: '', pathMatch: 'full', loadChildren: () => import('./features/movies/movies.routes').then(m => m.routes)},
        { path: '**', redirectTo: 'movies' }
];
