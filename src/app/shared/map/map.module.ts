import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
