import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any ).accessToken = 'pk.eyJ1IjoiY3IxNWNhaHUiLCJhIjoiY2xrcmxwbXozMHdocjNobnQ5NzluM2szbSJ9.VN9MyHUEA9H77rH60jLgEg';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }

  ngOnInit(): void {
  }

}
