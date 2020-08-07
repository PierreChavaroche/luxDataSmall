import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MapModule } from '../shared/map/map.module';
import { ListModule } from '../shared/list/list.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MapModule,
    ListModule
  ]
})
export class HomeModule { }
