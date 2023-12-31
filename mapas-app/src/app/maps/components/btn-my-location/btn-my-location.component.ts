import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private mapService:MapService,
    private placesService:PlacesService
  ){}

  goToMyLocation(){

    if(!this.placesService.isUserLocationReady) throw Error('No hay ubicacion de usuario');

    if(!this.placesService.isUserLocationReady) throw Error('No hay map disponible');

    this.mapService.flyTo(this.placesService.useLocation!);

    console.log('ir a mi aplicacion');
  }

}
