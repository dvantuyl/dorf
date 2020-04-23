import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorfComponent } from './dorf.component';

describe('DorfComponent', () => {
  let component: DorfComponent;
  let fixture: ComponentFixture<DorfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
