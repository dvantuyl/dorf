import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameRoomComponent } from './pages/game-room/game-room.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
    pathMatch: 'full',
  },
  { path: 'what/:gameId', component: GameDetailComponent },

  { path: ':gameId/:roomId', component: GameRoomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
