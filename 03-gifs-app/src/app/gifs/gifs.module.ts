import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './page/homepage/homepage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [
    CommonModule
  ],exports:[
    HomepageComponent
  ]
})
export class GifsModule { }
