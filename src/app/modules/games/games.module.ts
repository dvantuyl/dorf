import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GameListComponent } from './pages/game-list/game-list.component';

@NgModule({
  declarations: [GameListComponent],
  imports: [CommonModule, GamesRoutingModule],
})
export class GamesModule {}
