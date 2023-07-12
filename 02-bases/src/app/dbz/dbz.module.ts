import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    NameComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameComponent
  ]
})
export class DbzModule { }
