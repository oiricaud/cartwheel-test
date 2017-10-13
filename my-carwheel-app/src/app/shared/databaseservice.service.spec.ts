import { TestBed, inject } from '@angular/core/testing';

import { DatabaseserviceService } from './databaseservice.service';

describe('DatabaseserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseserviceService]
    });
  });

  it('should be created', inject([DatabaseserviceService], (service: DatabaseserviceService) => {
    expect(service).toBeTruthy();
  }));
});
