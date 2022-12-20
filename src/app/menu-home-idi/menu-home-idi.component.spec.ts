import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeIdiComponent } from "./menu-home-idi-component";

describe('MenuHomeIdiComponent', () => {
  let component: MenuHomeIdiComponent;
  let fixture: ComponentFixture<MenuHomeIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHomeIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomeIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
