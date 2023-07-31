import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  public countryByRegion:SmallCountry[] = [];
  public bordes:string[] = [];

  constructor(private fb:FormBuilder,
    private countriesService:CountriesService
    ) { }

  public myForm:FormGroup = this.fb.group({
    region: ['',Validators.required],
    country: ['',Validators.required],
    border: ['',Validators.required],
  })

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions():Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged():void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap((region)=>this.countriesService.getCountryByRegion(region)),
      tap(()=> this.myForm.get('country')?.setValue("")),
      tap(()=> this.myForm.get('border')?.setValue("")),
    )
    .subscribe(countries=>{
      this.countryByRegion = countries;
    })
  }

  onCountryChanged():void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      filter((value:string) =>value.length > 0),
      switchMap((region)=>this.countriesService.getCountryByAlphaCode(region)),
      tap(()=> this.myForm.get('border')?.setValue("")),
    )
    .subscribe(country=>{
      this.bordes = country.borders;
    })
  }

  

}
