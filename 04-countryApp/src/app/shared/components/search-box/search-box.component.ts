import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy  {
  
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?:Subscription;

  @Output()
  onValue:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onDebounce:EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder:string = "";

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>{
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    console.log("Destruido");
    this.debouncerSuscription?.unsubscribe();
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

