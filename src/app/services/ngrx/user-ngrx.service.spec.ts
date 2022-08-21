import { TestBed } from '@angular/core/testing';

import { UserNgrxService } from './user-ngrx.service';

describe('UserNgrxService', () => {
  let service: UserNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
