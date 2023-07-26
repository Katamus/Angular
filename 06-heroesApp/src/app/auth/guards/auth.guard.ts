import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanMatch, CanActivate {

    constructor(){}


    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        console.log("Can Match");
        //throw new Error("Prueba de datos");
        return true;
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        console.log("Can Activate");
        //throw new Error("Prueba de datos");
        return true;
    }


}