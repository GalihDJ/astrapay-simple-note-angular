import { TestBed } from '@angular/core/testing';

import { SimpleNoteService } from './simple-note.service';

describe('SimpleNoteService', () => {
  let service: SimpleNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
