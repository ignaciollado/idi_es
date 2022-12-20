import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIdiComponent } from './content-idi.component';

describe('ContentIdiComponent', () => {
  let component: ContentIdiComponent;
  let fixture: ComponentFixture<ContentIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
