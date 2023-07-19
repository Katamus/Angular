import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit  {

  private debouncer: Subject<string> = new Subject<string>();

  @Output()
  onValue:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onDebounce:EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder:string = "";

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>{
      this.onDebounce.emit(value);
    })
  }

  /*
  function OutPut(): (target: SearchBoxComponent, propertyKey: "placeholder") => void {
    throw new Error('Function not implemented.');
  }*/
  
  emitValue(arg:string):void{
    this.onValue.emit(arg);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}

