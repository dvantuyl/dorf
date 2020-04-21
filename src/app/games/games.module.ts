import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplendorfComponent } from './splendorf/splendorf.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [SplendorfComponent, GamesComponent],
  imports: [CommonModule],
  exports: [GamesComponent],
})
export class GamesModule {}
