import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTheWebDetailComponent } from './search-the-web-detail.component';

describe('SearchTheWebDetailComponent', () => {
  let component: SearchTheWebDetailComponent;
  let fixture: ComponentFixture<SearchTheWebDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTheWebDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTheWebDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
