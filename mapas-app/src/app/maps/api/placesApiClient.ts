import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Mapbox from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class PlacesApiClient extends HttpClient {

  public baseUrl:string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  constructor(handler:HttpHandler){
    super(handler);
  }

  public override get<t>( url: string, options: {
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
}){
    url = this.baseUrl+url;

    return super.get<t>(url,{
      params:{
        limit:5,
        languaje:'es',
        access_token:Mapbox.accessToken,
        ...options.params
      }
    });
  }

}
