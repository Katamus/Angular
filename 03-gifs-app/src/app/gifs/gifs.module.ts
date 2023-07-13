import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './page/homepage/homepage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HomepageComponent
  ]
})
export class GifsModule { }
