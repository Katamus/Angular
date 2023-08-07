import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItem {
  name:string;
  route:string;
}


@Component({
  standalone:true,
  imports:[RouterModule,CommonModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


  public menuItems:MenuItem[] = [
    { route:"/maps/fullscreen", name:"fullscreen"},
    { route:"/maps/zoom-rage", name:"zoom-rage"},
    { route:"/maps/markers", name:"markers"},
    { route:"/maps/properties", name:"properties"},
    { route:"/alone", name:"alone page"}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
