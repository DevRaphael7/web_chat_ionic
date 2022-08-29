import { TestBed } from '@angular/core/testing';

import { ContactNgrxService } from './contact-ngrx.service';

describe('ContactNgrxService', () => {
  let service: ContactNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
