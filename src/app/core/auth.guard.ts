import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({providedIn:"root"})//para alojarlo en toda la aplicación
export class AuthGuard implements CanActivate{
    constructor(private auth: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.auth.snapshot.isAuthenticated ? true :this.router.parseUrl("/");
    }

}
