import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {LngLat, Map, Marker} from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent  implements AfterViewInit, OnDestroy {


  @ViewChild('map') divMap?:ElementRef;
  public zoom :number =13;
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

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Criscahu';

    // const marker = new Marker({
    //   //color:'red'
    //   element:markerHtml
    // })
    // .setLngLat(this.currentCenterLngLat)
    // .addTo(this.map!);
    
  }

  createMarker () {
    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat,color);
  }


  addMarker(lngLat:LngLat,color:string ){
    if(!this.map) return;

    const marker = new Marker({
      color:color,
      draggable:true
    })
      .setLngLat(lngLat)
      .addTo(this.map)

  }


  ngOnDestroy(): void {
    this.map?.remove();
  }


}
