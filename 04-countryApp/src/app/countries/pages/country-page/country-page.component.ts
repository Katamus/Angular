import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { CountriesModule } from '../../countries.module';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
    private countriesService:CountriesService,
    private router:Router
    ) { }



  ngOnInit(): void {
    
    this.activatedRoute.params.pipe(
      switchMap(({id}) =>  this.countriesService.searchCountryByAlphaCde(id))
    )
    .subscribe(country=>{

      if(!country) {
        this.router.navigateByUrl('');
      }else{
        console.log(country);
      }
        

    })

  }

  

}
