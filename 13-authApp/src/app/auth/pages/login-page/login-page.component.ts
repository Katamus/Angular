import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import Swal from 'sweetalert2'

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  public myForm:FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
  });

  login(){

    if(!this.myForm.valid) return;

    const {email,password} = this.myForm.value;
    this.authService.login(email,password).subscribe(
      {
        next: () => console.log('tofo bien!'),
        error: (message)=>{
          Swal.fire('Error',message,'error');
        }
      }

    );

  }

}
