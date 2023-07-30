import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorService,
    private emailValidator:EmailValidatorService
    ) { }

  ngOnInit(): void {
  }

  public myForm:FormGroup = this.fb.group({
    name: ['',[Validators.required,Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    //email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern) ],[ new EmailValidatorService()]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern) ],[ this.emailValidator]],
    username: ['',[Validators.required, this.validatorService.cantBeStrider]],
    password: ['',[Validators.required, Validators.minLength(6) ]],
    password2: ['',[Validators.required ]],
  },{
    validators: [
      this.validatorService.isFieldOneEqualFliedTwo('password','password2')
    ]
  });

  isValidField(field:string){
    return this.validatorService.isValidField(this.myForm,field);
  }

  

  onSubmit(){
    this.myForm.markAllAsTouched();
  }



}
