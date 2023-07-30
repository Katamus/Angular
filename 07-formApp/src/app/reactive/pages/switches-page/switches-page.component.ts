import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public person = {
    gender: 'f',
    wantNotificacions: false
  };

  constructor(private fb:FormBuilder) { }

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotificacions:[true, Validators.required],
    termsAndConditions: [null, Validators.requiredTrue]
  })

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person
    })
  }

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }


    const {termsAndConditions, ...newPerson} = this.myForm.value;
    this.person =  newPerson;

    console.log(this.person);
    console.log(this.myForm.value);
  }

  isValidField(field:string):boolean | null {
    return this.myForm.controls[field].errors
            && 
            this.myForm.controls[field].touched;
  }

}
