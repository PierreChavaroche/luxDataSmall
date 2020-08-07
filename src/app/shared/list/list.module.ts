import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MatButtonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
