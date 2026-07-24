import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from './course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [1, 3]; // Default enrolled courses

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  getEnrolledCourses(): Course[] {
    const allCourses: Course[] = [];
    this.courseService.getCourses().subscribe(courses => {
      allCourses.push(...courses.filter(c => this.enrolledCourseIds.includes(c.id)));
    });
    return allCourses;
  }

  getStudentsByCourse(courseId: number): Observable<string[]> {
    // Simulates returning enrolled student names for a given course
    const mockStudents: { [key: number]: string[] } = {
      1: ['Alice Johnson', 'Bob Smith', 'Charlie Brown'],
      2: ['Diana Prince', 'Evan Wright'],
      3: ['Fiona Gallagher', 'George Clark', 'Hannah Abbott'],
      4: ['Ian Malcolm'],
      5: ['Julia Roberts', 'Kevin Bacon']
    };
    return of(mockStudents[courseId] || ['Generic Student']);
  }
}
