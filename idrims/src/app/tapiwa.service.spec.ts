import { TestBed, inject } from '@angular/core/testing';

import { TapiwaService } from './tapiwa.service';

describe('TapiwaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TapiwaService]
    });
  });

  it('should be created', inject([TapiwaService], (service: TapiwaService) => {
    expect(service).toBeTruthy();
  }));
});
