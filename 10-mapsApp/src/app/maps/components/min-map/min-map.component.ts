import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';

@Component({
  selector: 'maps-min-map',
  templateUrl: './min-map.component.html',
  styleUrls: ['./min-map.component.css']
})
export class MinMapComponent implements OnInit, AfterViewInit {

  @Input() lngLat?: [number,number];

  @ViewChild("map") divMap?:ElementRef;

  public map?:Map;

  constructor() { }


  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement) throw "Map Div not found";
    if(!this.lngLat) throw "LngLat can`t be null"

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
      interactive:false
    });

    this.createMarker(this.lngLat);
  }

  createMarker (lngLat:[number,number]) {
    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const [lng,Lat] = lngLat;
    this.addMarker(new LngLat(lng,Lat),color);
  }

  addMarker(lngLat:LngLat,color:string ){
    if(!this.map) return;

    const marker = new Marker({
      color:color,
      draggable:true
    })
      .setLngLat(lngLat)
      .addTo(this.map);
  }

  ngOnInit(): void {
  }

}
