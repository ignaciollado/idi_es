import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedIdiComponent } from './featured-idi.component';

describe('FeaturedIdiComponent', () => {
  let component: FeaturedIdiComponent;
  let fixture: ComponentFixture<FeaturedIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
