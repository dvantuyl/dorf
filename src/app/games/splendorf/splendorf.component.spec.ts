import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplendorfComponent } from './splendorf.component';

describe('SplendorfComponent', () => {
  let component: SplendorfComponent;
  let fixture: ComponentFixture<SplendorfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplendorfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplendorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
