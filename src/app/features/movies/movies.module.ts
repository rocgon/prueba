
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './component/movies.component';
import { routes } from "./movies.routes"

@NgModule({
    imports: [RouterModule.forRoot(routes)],//devuelve las rutas
    exports: [RouterModule]
})

export class MoviesModule {}