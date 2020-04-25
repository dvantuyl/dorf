import { Component, OnInit } from '@angular/core';
import { RandomColorContrastService } from '@core/service/random-color-contrast.service';
import { GAMES_LIST, IGameDef } from '@library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games = GAMES_LIST;

  constructor(
    private rccs: RandomColorContrastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  gotoGame(game: IGameDef) {
    this.router.navigate([`/what/${game.id}`]);
  }

  primaryStyle(): any {
    return {
      color: `rgb(${[...this.rccs.primary()]})`,
      borderColor: `rgb(${[...this.rccs.primary()]})`,
    };
  }

  secondaryStyle(): any {
    return { backgroundColor: `rgb(${[...this.rccs.secondary()]})` };
  }

  randomizeStyles() {
    this.rccs.randomize();
  }
}
