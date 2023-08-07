import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

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
