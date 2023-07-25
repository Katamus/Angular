import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroesRoutingModule } from "./heroes-routing.module";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { MaterialModule } from '../material/material.module';
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    CardComponent,
    HeroImagePipe,
    HeroPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
