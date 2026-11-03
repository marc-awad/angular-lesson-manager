import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuNavBar } from './menu-nav-bar';

describe('MenuNavBar', () => {
  let component: MenuNavBar;
  let fixture: ComponentFixture<MenuNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
