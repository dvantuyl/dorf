import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  maybe = false;
  dorf = false;

  constructor(public auth: AngularFireAuth, private router: Router) {}
  login() {
    this.dorf = true;
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {
      if (result.user) {
        this.router.navigate(['/dorf']);
      }
    });
  }

  ngOnInit(): void {}
}
