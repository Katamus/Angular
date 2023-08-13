import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapbox from 'mapbox-gl';

Mapbox.accessToken = 'pk.eyJ1IjoiY3IxNWNhaHUiLCJhIjoiY2xrcmx6bjQzMXI1bTNjbzU5eHRuNm1pMCJ9.A3LzUtPyJ46q3aHTD9fUXg';

if(!navigator.geolocation){
  alert('Navegador o soporta la Geolocation');
  throw new Error('Navegador o soporta la Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
