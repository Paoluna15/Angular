import { TestBed } from '@angular/core/testing';

import { ServivioPrincipalService } from './servivio-principal.service';

describe('ServivioPrincipalService', () => {
  let service: ServivioPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServivioPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
