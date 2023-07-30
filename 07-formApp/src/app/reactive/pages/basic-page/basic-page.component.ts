import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage:5
}


@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  // public myForm:FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  
  constructor(private fb:FormBuilder) {}

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    price:[0 ,[Validators.required,Validators.min(0)]],
    inStorage: [0,[Validators.required,Validators.min(0)]]
  })


  ngOnInit(): void {
    this.myForm.reset({
      ...rtx5090
    });

  }

  onSave():void{
    if(this.myForm.invalid) return;
    console.log(this.myForm.value);

    this.myForm.reset({
      price:10,
      inStorage:0
    });
    
  }

}