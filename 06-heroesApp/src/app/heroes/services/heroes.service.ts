import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Hero } from "../interfaces/hero.interface";

@Injectable({
    providedIn: 'root'
})
export class HeroesService{

    private baseUrl:string = environment.baseUrl;

    constructor(private http:HttpClient){}

    getHeroes():Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHeroesById(id:string):Observable<Hero|undefined> {
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
            .pipe(
                catchError( error => {
                    return of(undefined);
                })
            )
        ;
    }
}