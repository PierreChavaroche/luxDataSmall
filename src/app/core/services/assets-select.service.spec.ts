import { TestBed } from '@angular/core/testing';

import { AssetsSelectService } from './assets-select.service';

describe('AssetsSelectService', () => {
  let service: AssetsSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
