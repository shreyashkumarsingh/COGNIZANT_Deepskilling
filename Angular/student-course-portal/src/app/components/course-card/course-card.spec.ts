import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Test 102: Should create component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 103: @Input rendering test
  it('should render course name in h3 when @Input course is set', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const h3Element = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3Element.textContent).toContain('Data Structures');
  });

  // Test 104: @Output event emission test
  it('should emit course id on enrollRequested when Enroll button is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const enrollBtn = buttons.find(b => b.nativeElement.textContent.trim().includes('Enroll'));

    if (enrollBtn) {
      enrollBtn.nativeElement.click();
      fixture.detectChanges();
      expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
    } else {
      fail('Enroll button not found in template');
    }
  });

  // Test 105: ngOnChanges test
  it('should log previous and current values when ngOnChanges is called', () => {
    spyOn(console, 'log');

    const changes: SimpleChanges = {
      course: new SimpleChange(null, mockCourse, true)
    };

    component.ngOnChanges(changes);

    expect(console.log).toHaveBeenCalledWith(
      'CourseCardComponent ngOnChanges — Prev:',
      null,
      'Current:',
      mockCourse
    );
  });
});
