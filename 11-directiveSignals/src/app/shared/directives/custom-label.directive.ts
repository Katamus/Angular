import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?:ElementRef<HTMLElement>;

  private _color:string = 'red';

  private _error?:ValidationErrors | null;

  @Input() set color(value:string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value:ValidationErrors | null | undefined){
    this._error = value;
    this.setErrorMessage();
  }


  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    //this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle():void {
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if(!this.htmlElement) return;
    if(!this._error){
      this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
      return;
    } 
    const errors = Object.keys(this._error);
    console.log(errors);
    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return
    }
  }


}
