import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent  {

  
  serchByCapital(term:string){
    console.log("Desde byCapitalPage");
    console.log({term});
  }

}
