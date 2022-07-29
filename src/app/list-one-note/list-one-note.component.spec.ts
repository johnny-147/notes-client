import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneNoteComponent } from './list-one-note.component';

describe('ListOneNoteComponent', () => {
  let component: ListOneNoteComponent;
  let fixture: ComponentFixture<ListOneNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOneNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOneNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
