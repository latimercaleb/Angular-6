import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    // To be a route guard it has to have CanActivate method
    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // This code will be configured to give this data before each route to this method, this method will handle it and correlate the response 
        return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
                if(authenticated){
                    return true; // Return true and allow navigation
                }else{
                    this.router.navigate(['/']); // Navigate away, user is not authenticated
                }
            }
        )
    }

    // For route guarding on children routes only use canActivateChild, it works the same way so it's easy to just delegate and inject the dependencies 

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }



}