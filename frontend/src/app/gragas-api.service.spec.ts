import { TestBed } from '@angular/core/testing';

import { GragasApiService } from './gragas-api.service';

describe('GragasApiService', () => {
  let service: GragasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GragasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
