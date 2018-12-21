import { TestBed } from '@angular/core/testing';

import { NGXTAGCOMMANDERService } from './ngx-tag-commander.service';

describe('NGXTAGCOMMANDERService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NGXTAGCOMMANDERService = TestBed.get(NGXTAGCOMMANDERService);
    expect(service).toBeTruthy();
  });
});
