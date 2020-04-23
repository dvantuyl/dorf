import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dorf',
  templateUrl: './dorf.component.html',
  styleUrls: ['./dorf.component.scss'],
})
export class DorfComponent implements OnInit {
  maybe = false;
  dorf = false;

  constructor() {}

  ngOnInit(): void {}
}
