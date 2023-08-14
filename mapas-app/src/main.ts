import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapbox from 'mapbox-gl';

Mapbox.accessToken = 'key del map box';

if(!navigator.geolocation){
  alert('Navegador o soporta la Geolocation');
  throw new Error('Navegador o soporta la Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
