import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNewCourseFormComponent } from './second-new-course-form.component';

describe('SecondNewCourseFormComponent', () => {
  let component: SecondNewCourseFormComponent;
  let fixture: ComponentFixture<SecondNewCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondNewCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNewCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
