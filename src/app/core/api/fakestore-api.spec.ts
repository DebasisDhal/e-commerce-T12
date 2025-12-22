import { TestBed } from '@angular/core/testing';

import { FakestoreApi } from './fakestore-api';

describe('FakestoreApi', () => {
  let service: FakestoreApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
