import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gitfs.service';

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

  constructor(public gifsService:GifsService){

  }

  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }

}
