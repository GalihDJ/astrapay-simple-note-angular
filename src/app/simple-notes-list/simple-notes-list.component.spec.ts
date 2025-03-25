import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNotesListComponent } from './simple-notes-list.component';

describe('SimpleNotesListComponent', () => {
  let component: SimpleNotesListComponent;
  let fixture: ComponentFixture<SimpleNotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleNotesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
