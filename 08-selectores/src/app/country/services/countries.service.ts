import { Injectable } from '@angular/core';
import { Region, Country, SmallCountry } from '../interfaces/country.interface';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1/';

  constructor(private http:HttpClient) { }

  private _regions:Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania
  ];

  get regions():Region[] {
    return [...this._regions]
  }

  getCountryByRegion(region:Region):Observable<SmallCountry[]>{

    if(!region ) return of([]);

    const url:string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.http.get<SmallCountry[]>(url).pipe(
      tap(resp => console.log(resp))
    );
  }


}
