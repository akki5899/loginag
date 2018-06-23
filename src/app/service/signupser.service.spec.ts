import { TestBed, inject } from '@angular/core/testing';

import { SignupserService } from './signupser.service';

describe('SignupserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupserService]
    });
  });

  it('should be created', inject([SignupserService], (service: SignupserService) => {
    expect(service).toBeTruthy();
  }));
});
