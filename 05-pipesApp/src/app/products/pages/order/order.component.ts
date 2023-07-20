import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/Hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  items: MenuItem[] | undefined;

  public isUpperCase:boolean = false;

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes:Hero[] = [
    {
      name: 'SuperMan',
      canFly: true,
      color:Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color:Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color:Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color:Color.green
    }

  ]

  ngOnInit() {
    this.items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
        }
    ];
}
}
