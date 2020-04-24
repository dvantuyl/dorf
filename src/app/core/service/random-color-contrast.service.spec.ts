import { TestBed } from '@angular/core/testing';

import { RandomColorContrastService } from './random-color-contrast.service';

describe('RandomColorContrastService', () => {
  let service: RandomColorContrastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomColorContrastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
