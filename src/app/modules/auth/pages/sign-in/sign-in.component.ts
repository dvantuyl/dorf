import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { RandomColorContrastService } from '@core/service/random-color-contrast.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private rccs: RandomColorContrastService
  ) {}

  ngOnInit(): void {
    this.randomizeStyles();
    this.auth.user.subscribe((user) => {
      if (user) {
        this.router.navigate(['/dorf']);
      }
    });
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {
      if (result.user) {
        this.router.navigate(['/dorf']);
      }
    });
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
}
