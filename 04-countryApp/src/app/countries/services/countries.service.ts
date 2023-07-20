import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, delay, map, of, tap } from "rxjs";
import { Country } from "../interfaces/country";
import { CacheStore } from "../interfaces/cahce-stroe.interface";
import { Region } from "../interfaces/region.type";


@Injectable({providedIn:'root'})
export class CountriesService {


    private apiUrl:string = 'https://restcountries.com/v3.1';

    public cacheStore:CacheStore = {
        byCapital:{
            term:'',
            countries:[]
        },
        byCountries:{
            term:'',
            countries:[]
        },
        byRegion:{
            region:'Africa',
            countries:[]
        }
    }

    constructor(private httpClient:HttpClient){
        //this.loadFromLoadLocalStorage();
    }

    private saveToLocalStorage(){
        localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
    }

    private loadFromLoadLocalStorage(){
        let db:string|null = localStorage.getItem('cacheStore');
        if(db){
            this.cacheStore = JSON.parse(db);
        }

    }

    private getCountriesRequest(url:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(url).pipe(
            catchError(error=> {
                return of([]);
            } )
        );
    }

    searchCapital(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCapital = {term,countries} ),
                tap(()=>this.saveToLocalStorage()),
            )
        ;
    }

    searchCountry(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCountries = {term,countries}),
                tap(()=>this.saveToLocalStorage()),
            )
        ;
    }

    searchRegion(region:Region):Observable<Country[]>{
        const url = `${this.apiUrl}/region/${region}`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byRegion = {region,countries}),
                tap(()=>this.saveToLocalStorage()),
            )
        ;
    }

    searchCountryByAlphaCde(term:string):Observable<Country|null>{
        const url = `${this.apiUrl}/alpha/${term}`;
        return this.httpClient.get<Country[]>(url).pipe(
            map(countries=>countries.length > 0 ? countries[0] : null),
            catchError(error=> {
                return of(null);
            }),
            delay(2000),
        );
    }

    
}