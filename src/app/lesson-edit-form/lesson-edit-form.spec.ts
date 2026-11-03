import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonEditForm } from './lesson-edit-form';

describe('LessonEditForm', () => {
  let component: LessonEditForm;
  let fixture: ComponentFixture<LessonEditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonEditForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonEditForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
