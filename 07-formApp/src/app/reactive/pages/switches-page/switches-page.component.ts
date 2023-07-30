import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotificacions:[true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  ngOnInit(): void {
  }

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched;
      return;
    }
  }

}
