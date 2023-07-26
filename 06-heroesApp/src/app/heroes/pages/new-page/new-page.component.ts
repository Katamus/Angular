import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    {
      id: 'Dc Comics',desc:"DC - Comics"
    },{
      id: 'Marvel Comics',desc:"Marvel - Comics"
    }
  ]

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  onSubmit():void {

    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroService.updateHero(this.currentHero)
      .subscribe(hero=>{
        console.log(hero);
      });
      return;
    }

    this.heroService.addHero(this.currentHero)
      .subscribe(hero=>{
        console.log(hero);
        
      })
    
  }

  get currentHero():Hero {
    const hero = this.heroForm.value as Hero;

    
    return hero;
  }

}
