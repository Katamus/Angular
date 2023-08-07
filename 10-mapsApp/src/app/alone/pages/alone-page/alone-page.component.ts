import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterPageComponent } from '../../components/counter-page/counter-page.component';

@Component({
  standalone: true,
  imports: [CounterPageComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

  constructor() { }

}
