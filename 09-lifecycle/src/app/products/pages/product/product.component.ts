import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy {

  public isProductVisible = false;

  public price = 1;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges():void {
    console.log("ngOnChanges");
  }

  ngDoCheck():void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit():void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit():void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked():void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy():void {
    console.log("ngOnDestroy");
  }

  ngAfterContentChecked():void {
    console.log("ngAfterContentChecked");
  }

  currentPrice():number{
    return this.price++;
  }

}
