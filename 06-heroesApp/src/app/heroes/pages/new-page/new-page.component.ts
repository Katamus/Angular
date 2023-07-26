import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialodComponent } from '../../components/confirm-dialod/confirm-dialod.component';

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
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroesService,
    private activatedRoute:ActivatedRoute, 
    private router:Router,
    private snackbar:MatSnackBar,
    private dialog:MatDialog
    ){ }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.heroService.getHeroesById(id))
      ).subscribe(hero=>{
        if(!hero) {
          return this.router.navigateByUrl('/');
        }
        this.heroForm.reset(hero);
        return;
      });
  }

  onSubmit():void {

    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroService.updateHero(this.currentHero)
      .subscribe((hero)=>{
        this.showSnackbar(`${hero.superhero} updated!`);
      })
    }

    this.heroService.addHero(this.currentHero)
      .subscribe(hero=>{
        this.router.navigate(['/heroes/edit/',hero.id]);
        this.showSnackbar(`${hero.superhero} created!`);
      })
    
  }

  get currentHero():Hero {
    const hero = this.heroForm.value as Hero;

    
    return hero;
  }

  showSnackbar(message:string):void{
    this.snackbar.open(message,'done',{
      duration:2500,
    })
  }

  onDeleteHero(){
    if(!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialodComponent, {
      data:this.heroForm.value
    })

    dialogRef.afterClosed().subscribe(result=>{
      if(!result) return;

      this.heroService.deleteHero(this.currentHero.id).subscribe(()=>{
        this.router.navigate(['/heroes']);
      });
    });

  }

}
