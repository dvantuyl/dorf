import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DorfRoutingModule } from './dorf-routing.module';
import { DorfComponent } from './dorf.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [DorfComponent],
  imports: [CommonModule, DorfRoutingModule, SharedModule],
})
export class DorfModule {}
