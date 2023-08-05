import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  selector: 'app-zoom-rage-page',
  templateUrl: './zoom-rage-page.component.html',
  styleUrls: ['./zoom-rage-page.component.css']
})
export class ZoomRagePageComponent implements AfterViewInit {

  
  @ViewChild('map') divMap?:ElementRef;

  public zoom :number =10;
  public map?:Map;

  constructor() { }
  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elmento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners();
  }

  ngOnInit(): void {
  }

  mapListeners(){

    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom',(env)=> {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend',(env)=> {
      if(this.map!.getZoom() < 18 ) return ;

      this.map!.zoomTo(18);

    });
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
