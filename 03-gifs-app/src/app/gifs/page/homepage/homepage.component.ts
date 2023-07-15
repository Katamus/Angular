import { Component } from '@angular/core';
import { GifsService } from '../../services/gitfs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private gifsService:GifsService){

  }

  get gifs():Gif[]{
    return this.gifsService.gifList;
  }

}
