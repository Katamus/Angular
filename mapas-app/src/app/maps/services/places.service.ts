import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Mapbox from 'mapbox-gl';
import { PlacesResponse } from '../interfaces';
import { Feature } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number,number];

  public isLoadingPlaces:boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady():boolean {
    return !!this.useLocation;
  }

  constructor(private http:HttpClient) {
    this.getUserLocation();
  }

  public async getUserLocation():Promise<[number,number]>{

    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.useLocation = [coords.longitude,coords.latitude];
          resolve(this.useLocation)
        },
        (err) =>{
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }
        )
    })

  }

  getPlacesByQuery(query:string =''){
    this.isLoadingPlaces = true;
    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=5&access_token=${Mapbox.accessToken}&languaje=es&proximity=-84.214,10.01`)
    .subscribe(resp=>{
      console.log(resp.features);
      this.isLoadingPlaces = false;
      this.places = this.places;
    });

  }

}
