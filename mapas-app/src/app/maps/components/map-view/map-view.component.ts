import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import {Map} from 'mapbox-gl'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElemt!: ElementRef;

  constructor( private placesService:PlacesService){

  }
  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElemt.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesService.useLocation,
      zoom: 14,
      });
  }

}
