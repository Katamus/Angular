import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  public name:  string = 'IronMan';
  public age:   number = 45;


  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescriprion():string{
    return `${this.name }- ${this.age}`
  }
  
}
