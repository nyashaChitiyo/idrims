import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardRouteService } from './auth-guard-route.service';

describe('AuthGuardRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardRouteService]
    });
  });

  it('should be created', inject([AuthGuardRouteService], (service: AuthGuardRouteService) => {
    expect(service).toBeTruthy();
  }));
});
