import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent  {

  public isLoading:boolean = false;

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  serchByCapital(term:string){
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries=>{
        this.countries = countries;
        this.isLoading = false
      });
    
    ;
  }

}
