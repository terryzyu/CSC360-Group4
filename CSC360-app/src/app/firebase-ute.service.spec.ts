import { TestBed } from '@angular/core/testing';

import { FirebaseUTEService } from './firebase-ute.service';

describe('FirebaseUTEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUTEService = TestBed.get(FirebaseUTEService);
    expect(service).toBeTruthy();
  });
});
