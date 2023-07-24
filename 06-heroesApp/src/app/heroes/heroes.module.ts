import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroesRoutingModule } from "./heroes-routing.module";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { MaterialModule } from '../material/material.module';
import { ListPageComponent } from "./pages/list-page/list-page.component";



@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
