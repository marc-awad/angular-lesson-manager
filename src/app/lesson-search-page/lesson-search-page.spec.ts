import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonSearchPage } from './lesson-search-page';

describe('LessonSearchPage', () => {
  let component: LessonSearchPage;
  let fixture: ComponentFixture<LessonSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonSearchPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonSearchPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
