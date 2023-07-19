import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit  {

  public initValue:string = '';

  public isLoading:boolean = false;

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}


  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initValue = this.countriesService.cacheStore.byCapital.term;
  }

  serchByCapital(term:string){
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries=>{
        this.countries = countries;
        this.isLoading = false
      });
  }
}
