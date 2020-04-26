import { Component, OnInit } from '@angular/core';
import { RandomStyleService } from '@core/service/random-style-service';
import { GAMES_LIST, IGameDef } from '@library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games = GAMES_LIST;

  constructor(private rss: RandomStyleService, private router: Router) {}

  ngOnInit(): void {}

  gotoGame(game: IGameDef) {
    this.router.navigate([`/what/${game.id}`]);
  }

  primaryStyle(): any {
    return {
      color: `rgb(${[...this.rss.rgbPrimary]})`,
      borderColor: `rgb(${[...this.rss.rgbPrimary]})`,
    };
  }

  secondaryStyle(): any {
    return { backgroundColor: `rgb(${[...this.rss.rgbSecondary]})` };
  }

  randomizeStyles() {
    this.rss.randomize();
  }
}
