import { Component, OnInit } from '@angular/core';
import { RandomStyleService } from '@core/service/random-style-service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  constructor(private rss: RandomStyleService) {}

  ngOnInit(): void {}

  backgroundStyle(): any {
    return {
      backgroundColor: `rgb(${[...this.rss.rgbSecondary]})`,
    };
  }

  patternX(): number {
    return this.rss.patternX;
  }
  patternY(): number {
    return this.rss.patternY;
  }

  patternStyle(): any {
    return {
      fill: `rgb(${[...this.rss.rgbPrimary]})`,
    };
  }
}
