import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DorfComponent } from './dorf.component';

const routes: Routes = [
  { path: '', component: DorfComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DorfRoutingModule {}
