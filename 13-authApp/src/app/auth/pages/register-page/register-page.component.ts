import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm:FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    name: ['',[Validators.required, Validators.minLength(3)]],
  });

  register(){

    if(!this.myForm.valid) return;

    const {email,password,name} = this.myForm.value;
    this.authService.register(email,password,name).subscribe(
      {
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message)=>{
          Swal.fire('Error',message,'error');
        }
      }

    );

  }

}
