import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecolorComponent } from './datecolor.component';

describe('DatecolorComponent', () => {
  let component: DatecolorComponent;
  let fixture: ComponentFixture<DatecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
