import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameRoomComponent } from './pages/game-room/game-room.component';

const routes: Routes = [
  {
    path: 'what',
    component: GamesComponent,
    children: [
      {
        path: '',
        component: GameListComponent,
      },
      { path: ':gameId', component: GameDetailComponent },

      { path: ':gameId/:roomId', component: GameRoomComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
