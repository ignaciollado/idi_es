import { TestBed } from '@angular/core/testing';

import { SearchTheWebService } from './search-the-web.service';

describe('SearchTheWebService', () => {
  let service: SearchTheWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTheWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
