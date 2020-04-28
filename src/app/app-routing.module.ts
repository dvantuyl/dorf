import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { DorfComponent } from '@modules/dorf/dorf.component';
import { GameListComponent } from '@modules/games/pages/game-list/game-list.component';
import { GameDetailComponent } from '@modules/games/pages/game-detail/game-detail.component';
import { GameRoomComponent } from '@modules/games/pages/game-room/game-room.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/who']);
const redirectLoggedInToDorf = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DorfComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin, animation: 'dorf' },
  },
  {
    path: 'what',
    component: GameListComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin, animation: 'what' },
  },
  {
    path: 'what/:gameId',
    component: GameDetailComponent,

    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin, animation: 'detail' },
  },
  {
    path: 'what/:gameId/:roomId',
    component: GameRoomComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin, animation: 'room' },
  },
  {
    path: 'who',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDorf },
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
