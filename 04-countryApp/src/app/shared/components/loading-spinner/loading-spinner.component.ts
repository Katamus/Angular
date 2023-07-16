import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [`
    .spinner-component {
      position:fixed;
      bottom:15px;
      right:15px;
      background-color:black;
      color:white;
      padding:5px 10px;
      border-radius: 20px;
      display:flex;
      align-items:center;
      box-shadow: 0px 0px 5px (0,0,0,0.5)
    }
    span{
      margin-left:5px;
    }
  `
  ]
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
