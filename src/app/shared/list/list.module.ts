import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
