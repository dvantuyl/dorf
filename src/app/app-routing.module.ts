import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AppComponent } from './app.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/no-dorf']);
const redirectLoggedInToDorf = () => redirectLoggedInTo(['/dorf']);

const routes: Routes = [
  { path: '', redirectTo: 'dorf', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: 'dorf',
        loadChildren: () =>
          import('./modules/dorf/dorf.module').then((m) => m.DorfModule),

        data: { animation: 'dorf' },
      },
      {
        path: 'what',
        loadChildren: () =>
          import('./modules/games/games.module').then((m) => m.GamesModule),

        data: { animation: 'games' },
      },
    ],
  },
  {
    path: 'no-dorf',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDorf },
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
