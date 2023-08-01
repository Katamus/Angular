import { Component, OnInit } from '@angular/core';


interface MenuItem {
  name:string;
  route:string;
}


@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


  public menuItems:MenuItem[] = [
    { route:"/maps/fullscreen", name:"fullscreen"},
    { route:"/maps/zoom-rage", name:"zoom-rage"},
    { route:"/maps/markers", name:"markers"},
    { route:"/maps/properties", name:"properties"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}