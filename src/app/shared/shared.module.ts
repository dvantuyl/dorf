import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { from } from 'rxjs';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule],
  exports: [...fromComponents.components],
})
export class SharedModule {}
