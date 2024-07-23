import { TestBed } from '@angular/core/testing';

import { YoutubeQueryService } from './youtube-query.service';

describe('YoutubeQueryService', () => {
  let service: YoutubeQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
