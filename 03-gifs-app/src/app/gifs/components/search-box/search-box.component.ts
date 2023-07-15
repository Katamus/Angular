import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      (keyup.enter)="searchTag()"
      #txtTagInpunt
      placeholder="Buscar gifs..."
    >
  `,
  styles: []
})
export class SearchBoxComponent {

  @ViewChild('txtTagInpunt')
  tagInput!: ElementRef<HTMLInputElement>;

  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
  }

}
