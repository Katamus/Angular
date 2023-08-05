import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';

@Component({
  selector: 'app-zoom-rage-page',
  templateUrl: './zoom-rage-page.component.html',
  styleUrls: ['./zoom-rage-page.component.css']
})
export class ZoomRagePageComponent implements AfterViewInit, OnDestroy {

  
  @ViewChild('map') divMap?:ElementRef;

  public zoom :number =10;
  public map?:Map;
  public currentCenterLngLat: LngLat = new LngLat(-76.3017,3.5325);

  constructor() { }
  
  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elmento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenterLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
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

    this.map.on('move',()=>{
      const {lng,lat} = this.currentCenterLngLat = this.map!.getCenter();

    })
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
