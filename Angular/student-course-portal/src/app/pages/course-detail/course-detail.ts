import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-detail.html',
  styleUrls: ['./course-detail.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  enrolledStudents$: Observable<string[]> = of([]);
  courseId: number = 0;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.courseId = idParam ? Number(idParam) : 0;

    if (this.courseId) {
      this.courseService.getCourseById(this.courseId).subscribe({
        next: course => (this.course = course),
        error: err => (this.errorMessage = err.message)
      });

      this.enrolledStudents$ = this.route.paramMap.pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          return this.enrollmentService.getStudentsByCourse(id);
        })
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
