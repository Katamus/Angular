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

    let error = "";
    if(!this._error){
      this.setErrorMessageHtml(error);
      return;
    } 
    const errors = Object.keys(this._error);
    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
    } else if(errors.includes('minlength')){
      error = `Este campo es debe tener un longitud de ${this._error["minlength"]["requiredLength"]}, longitud actual de ${this._error["minlength"]["actualLength"]}`;
    } else if(errors.includes('email')){
      error = `Este campo no es un correo`;
    }
    this.setErrorMessageHtml(error);
    return;
  }

  setErrorMessageHtml(value:string):void{
    if(!this.htmlElement) return;
    this.htmlElement.nativeElement.innerText = value;
    return;
  }


}
