import { Injectable } from '@angular/core';
import { Region, Country, SmallCountry } from '../interfaces/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

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

  }


}
