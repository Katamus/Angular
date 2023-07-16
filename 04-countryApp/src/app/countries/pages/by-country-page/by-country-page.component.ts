import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent  {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  serchByCountry(term:string){
    this.countriesService.searchCountry(term)
      .subscribe(countries=>{
        this.countries = countries;
      });
  }

}
