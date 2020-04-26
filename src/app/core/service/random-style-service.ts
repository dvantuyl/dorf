import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomStyleService {
  rgbPrimary: Array<number>;
  rgbSecondary: Array<number>;
  patternX: number;
  patternY: number;

  constructor() {
    this.randomize();
  }

  randomize() {
    this.rgbPrimary = [
      this.randomInt(256),
      this.randomInt(256),
      this.randomInt(256),
    ];
    this.rgbPrimary[this.randomInt(3)] = 0;
    this.rgbSecondary = [
      255 - this.rgbPrimary[0],
      255 - this.rgbPrimary[1],
      255 - this.rgbPrimary[2],
    ];
    this.patternX = this.randomInt(100);
    this.patternY = this.randomInt(100);
  }

  private randomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
