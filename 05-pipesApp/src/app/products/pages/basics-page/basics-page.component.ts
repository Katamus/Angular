import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public namelower: string = 'Christian';
  public nameUpper: string = 'CHRISTIAN';
  public fullName: string = 'ChRiStIaN';
  
  public customDate:Date = new Date();


}
