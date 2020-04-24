import { Component, OnInit } from '@angular/core';
import { RandomColorContrastService } from '@core/service/random-color-contrast.service';
import { GAMES_LIST } from '@library';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games = GAMES_LIST;

  constructor(private rccs: RandomColorContrastService) {}

  ngOnInit(): void {}

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
