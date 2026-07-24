import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import * as CourseActions from '../../store/course/course.actions';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  courses$: Observable<Course[]>;
  enrolledIds$: Observable<number[]>;
  isLoading: boolean = true;
  selectedCourseId: number | null = null;
  searchTerm: string = '';
  errorMessage: string | null = null;

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnInit(): void {
    // Read query parameter if available
    this.route.queryParamMap.subscribe(params => {
      const search = params.get('search');
      if (search) {
        this.searchTerm = search;
      }
    });

    // Dispatch NgRx load courses action
    this.store.dispatch(CourseActions.loadCourses());

    // Subscribe to service data with loading delay simulation (Hands-On 3 Task 1)
    setTimeout(() => {
      this.courseService.getCourses().subscribe({
        next: courses => {
          this.courses = courses;
          this.isLoading = false;
        },
        error: err => {
          this.errorMessage = err.message;
          this.isLoading = false;
        }
      });
    }, 1500);
  }

  // trackBy reduces DOM re-rendering by tracking elements by unique ID rather than identity
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
      this.store.dispatch(EnrollmentActions.unenrollFromCourse({ courseId }));
    } else {
      this.enrollmentService.enroll(courseId);
      this.store.dispatch(EnrollmentActions.enrollInCourse({ courseId }));
    }
  }

  onSearchChange(): void {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm || null }
    });
  }

  navigateToDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrollmentService.isEnrolled(courseId);
  }
}
