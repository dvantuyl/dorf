import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomColorContrastService } from '@core/service/random-color-contrast.service';

@Component({
  selector: 'app-dorf',
  templateUrl: './dorf.component.html',
  styleUrls: ['./dorf.component.scss'],
})
export class DorfComponent implements OnInit {
  constructor(
    private rccs: RandomColorContrastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.randomizeStyles();
  }

  primaryStyle(): any {
    return { color: `rgb(${[...this.rccs.primary()]})` };
  }

  secondaryStyle(): any {
    return { backgroundColor: `rgb(${[...this.rccs.secondary()]})` };
  }

  randomizeStyles() {
    this.rccs.randomize();
  }

  dorf() {
    this.randomizeStyles();
    this.router.navigate(['/what']);
  }
}
