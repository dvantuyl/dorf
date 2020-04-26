import { TestBed } from '@angular/core/testing';

import { RandomStyleService } from './random-style-service';

describe('RandomColorContrastService', () => {
  let service: RandomStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
