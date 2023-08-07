import { Component, OnInit } from '@angular/core';
import { CounterPageComponent } from '../../components/counter-page/counter-page.component';
import { SideMenuComponent } from '../../../maps/components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [CounterPageComponent,SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

  constructor() { }

}
