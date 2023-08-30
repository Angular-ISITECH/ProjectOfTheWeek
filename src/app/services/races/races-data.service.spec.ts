import { TestBed } from '@angular/core/testing';

import { RacesDataService } from './races-data.service';

describe('RacesDataService', () => {
  let service: RacesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
