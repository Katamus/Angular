import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Christian';
  public gender:'male'| 'female' = 'male';
  public invitationMap = {
    'male': 'inivitarlo',
    'female':'inivitarla'
  }


  changeCliente(){
    this.name = 'Melissa';
    this.gender = 'female'
  }

}
