import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent  {

  @Output()
  onValue:EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder:string = "";

  /*
  function OutPut(): (target: SearchBoxComponent, propertyKey: "placeholder") => void {
    throw new Error('Function not implemented.');
  }*/
  
  emitValue(arg:string):void{
    this.onValue.emit(arg);
  }
}

