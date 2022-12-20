import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeEmprendedorDetailComponent } from './menu-home-emprendedor-detail.component';

describe('MenuHomeEmprendedorDetailComponent', () => {
  let component: MenuHomeEmprendedorDetailComponent;
  let fixture: ComponentFixture<MenuHomeEmprendedorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHomeEmprendedorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHomeEmprendedorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
