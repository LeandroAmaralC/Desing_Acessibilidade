import { TestBed } from '@angular/core/testing';

import { UniqueIdServiceService } from './unique-id-service.service';

describe('UniqueIdServiceService', () => {
  let service: UniqueIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
