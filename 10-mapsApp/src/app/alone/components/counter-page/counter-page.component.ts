import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-page',
  standalone: true,
  //imports: [CommonModule],
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent  {

  @Input()
  public counter:number = 10;

  constructor() { }

}
