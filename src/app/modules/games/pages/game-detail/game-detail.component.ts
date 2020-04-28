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
  public numPlayerChoices: Array<string> = [];
  public numPlayers: string;

  constructor(private rss: RandomStyleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('gameId');
    this.game = GAMES_LIST.find((game) => game.id === gameId);
    this.numPlayers = '' + this.game.minPlayers;
    for (let i = this.game.minPlayers; i <= this.game.maxPlayers; i++) {
      this.numPlayerChoices.push('' + i);
    }
  }

  primaryStyle(...attrs: Array<string>): any {
    let style = {};
    attrs.forEach((attr) => {
      style[attr] = `rgb(${[...this.rss.rgbPrimary]})`;
    });
    return style;
  }

  secondaryStyle(...attrs: Array<string>): any {
    let style = {};
    attrs.forEach((attr) => {
      style[attr] = `rgb(${[...this.rss.rgbSecondary]})`;
    });
    return style;
  }
}
