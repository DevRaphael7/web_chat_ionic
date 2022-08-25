import { TestBed } from '@angular/core/testing';

import { InterfaxeUxReduxService } from './interfaxe-ux-redux.service';

describe('InterfaxeUxReduxService', () => {
  let service: InterfaxeUxReduxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaxeUxReduxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
