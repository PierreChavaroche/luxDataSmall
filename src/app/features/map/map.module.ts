import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapModule as MapModuleShared } from '../../shared/map/map.module';
import { ListModule } from '../../shared/list/list.module';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    MapModuleShared,
    ListModule
  ]
})
export class MapModule { }
