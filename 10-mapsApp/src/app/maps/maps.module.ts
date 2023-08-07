import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';
import { MapsRoutingModule } from './maps-routing.module';
import { MinMapComponent } from './components/min-map/min-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRagePageComponent } from './pages/zoom-rage-page/zoom-rage-page.component';
import { CounterPageComponent } from '../alone/components/counter-page/counter-page.component';
(mapboxgl as any ).accessToken = 'pk.eyJ1IjoiY3IxNWNhaHUiLCJhIjoiY2xrcmxwbXozMHdocjNobnQ5NzluM2szbSJ9.VN9MyHUEA9H77rH60jLgEg';

@NgModule({
  declarations: [
    MinMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRagePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterPageComponent,
    SideMenuComponent
  ]
})
export class MapsModule { }
