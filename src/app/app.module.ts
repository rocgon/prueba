import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import{AppComponent} from "./app";//este el el principal de la aplicación que generó angular
import{routes} from "./app.routes";

@NgModule({
    imports:[
        BrowserModule,//para el buscador
        ReactiveFormsModule,//para los formularios reactivos
        RouterModule.forRoot(routes, {enableTracing: false})// las rutas que se van a manejar
    ],
    bootstrap:[AppComponent]
})

export class AppModule{}