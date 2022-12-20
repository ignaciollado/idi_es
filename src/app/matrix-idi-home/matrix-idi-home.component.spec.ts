import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixIdiHomeComponent } from './matrix-idi-home.component';

describe('MatrixIdiHomeComponent', () => {
  let component: MatrixIdiHomeComponent;
  let fixture: ComponentFixture<MatrixIdiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixIdiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixIdiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
