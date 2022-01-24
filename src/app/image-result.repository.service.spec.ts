import { TestBed } from '@angular/core/testing';

import { ImageResult.RepositoryService } from './image-result.repository.service';

describe('ImageResult.RepositoryService', () => {
  let service: ImageResult.RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageResult.RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
