import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
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

    getSuggestions(query:string):Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    }

    addHero(hero:Hero):Observable<Hero>{
        return this.http.post<Hero>(`${this.baseUrl}/heroes`,hero);
    }

    updateHero(hero:Hero):Observable<Hero>{
        if(!hero.id) throw Error('Hero id is required');
        return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero);
    }

    deleteHero(id:string):Observable<boolean>{
        if(!id) throw Error('id is required');
        return this.http.delete<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
            catchError(error => of(false)),
            map(resp => true)
        );
    }
}