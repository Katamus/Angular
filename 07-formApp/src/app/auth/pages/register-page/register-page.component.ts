import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  public myForm:FormGroup = this.fb.group({
    name: ['',[Validators.required ]],
    email: ['',[Validators.required ]],
    username: ['',[Validators.required ]],
    password: ['',[Validators.required, Validators.minLength(6) ]],
    password2: ['',[Validators.required ]],
  });

  

  onSubmit(){
    this.myForm.markAllAsTouched();
  }



}
