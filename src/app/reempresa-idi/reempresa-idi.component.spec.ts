import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReempresaIdiComponent } from './reempresa-idi.component';

describe('ReempresaIdiComponent', () => {
  let component: ReempresaIdiComponent;
  let fixture: ComponentFixture<ReempresaIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReempresaIdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReempresaIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
