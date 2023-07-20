import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Maria','Pedro','Fernando']
  public clientMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other':'tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name:'Christian',
    age:33,
    addres:'Palmira - Valle del cauca'
  }

  // Async pipe

  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(x=>console.log(x))
  );

  public promiseValue:Promise<String> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
      this.person.name = 'otro nombre' 
      
    },3500);
  })
}
