import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RandomStyleService } from '@core/service/random-style-service';
import { GAMES_LIST, IGameDef } from '@library';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  public game: IGameDef;

  constructor(private rss: RandomStyleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('gameId');
    this.game = GAMES_LIST.find((game) => game.id === gameId);
  }

  primaryStyle(): any {
    return {
      color: `rgb(${[...this.rss.rgbPrimary]})`,
      borderColor: `rgb(${[...this.rss.rgbPrimary]})`,
    };
  }
}
