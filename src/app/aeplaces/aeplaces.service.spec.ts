import { TestBed } from '@angular/core/testing';

import { AeplacesService } from './aeplaces.service';

describe('AeplacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AeplacesService = TestBed.get(AeplacesService);
    expect(service).toBeTruthy();
  });
});
