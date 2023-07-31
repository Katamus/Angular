import { Injectable } from '@angular/core';
import { Region, Country, SmallCountry } from '../interfaces/country.interface';
import { Observable, combineLatest, count, map, of, tap } from 'rxjs';
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
    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.map(
        country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        })))
    );
  }

  getCountryByAlphaCode(alphacode:string):Observable<SmallCountry>{
    const url:string = `${this.baseUrl}/alpha/${alphacode}?fields=cca3,name,borders`;
    return this.http.get<Country>(url)
    .pipe(
      map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []

      })))
  }

  getCountryBordesByCodes(bordes:string[]):Observable<SmallCountry[]>{
    if(!bordes || bordes.length === 0) return of([]);

    const countryRequest:Observable<SmallCountry>[] = [];

    bordes.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countryRequest.push(request);
    });

    return combineLatest(countryRequest);



  }


}
