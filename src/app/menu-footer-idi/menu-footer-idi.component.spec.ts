import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterIdiComponent } from './menu-footer-idi.component';

describe('MenuFooterIdiComponent', () => {
  let component: MenuFooterIdiComponent;
  let fixture: ComponentFixture<MenuFooterIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFooterIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFooterIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
