import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameRoomComponent } from './pages/game-room/game-room.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [GameListComponent, GameDetailComponent, GameRoomComponent, GamesComponent],
  imports: [CommonModule, GamesRoutingModule],
})
export class GamesModule {}
