import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';
import { count } from 'rxjs';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy, OnInit {


  ngOnInit(): void {
    setInterval(()=>{
      console.log("sss");
      this.counter.update(counter => counter+1 );
    },1000);
  }

  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });
  
  public fullname = computed<string>(()=>{
    if(!this.user) return 'Usuario no encontrado';
    return `${this.user()?.first_name} ${this.user()?.last_name}`;
  });
  
  public userChangedEffect = effect(()=>{
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });
  
  ngOnDestroy(): void {
    //this.userChangedEffect.destroy();
  }

  increaseBy(value:number) {
    this.counter.update(count =>count + 1);
  }

  onFieldUpdated(field:keyof User,value:string){
    
    // this.user.set({
    //   ...this.user(),
    //   [field]:value
    // })

    // this.user.update(current => {
    //     return {
    //       ...current,
    //     [field]:value
    //   }
    // });

    this.user.mutate(current => {
      switch(field){
        case 'email':
          current.email = value;
        break;

        case 'first_name':
          current.first_name = value;
        break;

        case 'last_name':
          current.last_name = value;
        break;
      }
    });
  }
}
