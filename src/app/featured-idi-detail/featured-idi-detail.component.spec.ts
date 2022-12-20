import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedIdiDetailComponent } from './featured-idi-detail.component';

describe('FeaturedIdiDetailComponent', () => {
  let component: FeaturedIdiDetailComponent;
  let fixture: ComponentFixture<FeaturedIdiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedIdiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedIdiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
