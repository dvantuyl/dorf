import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomColorContrastService {
  private rgbPrimary: Array<number>;
  private rgbSecondary: Array<number>;

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
  }

  primary(): Array<number> {
    return this.rgbPrimary;
  }

  secondary(): Array<number> {
    return this.rgbSecondary;
  }

  private randomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
