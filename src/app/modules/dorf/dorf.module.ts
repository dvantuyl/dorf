import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DorfRoutingModule } from './dorf-routing.module';
import { DorfComponent } from './dorf.component';


@NgModule({
  declarations: [DorfComponent],
  imports: [
    CommonModule,
    DorfRoutingModule
  ]
})
export class DorfModule { }
