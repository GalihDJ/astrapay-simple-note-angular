import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSimpleNotesComponent } from './create-simple-notes.component';

describe('CreateSimpleNotesComponent', () => {
  let component: CreateSimpleNotesComponent;
  let fixture: ComponentFixture<CreateSimpleNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSimpleNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSimpleNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
