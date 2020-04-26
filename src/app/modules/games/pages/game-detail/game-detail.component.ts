import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomStyleService } from '@core/service/random-style-service';
import { GAMES_LIST, IGameDef } from '@library';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  public game: IGameDef;

  constructor(
    private rss: RandomStyleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.game = GAMES_LIST.find((game) => game.id === params['gameId']);
      console.log(params, this.game);
    });
  }

  primaryStyle(): any {
    return {
      color: `rgb(${[...this.rss.rgbPrimary]})`,
      borderColor: `rgb(${[...this.rss.rgbPrimary]})`,
    };
  }
}
