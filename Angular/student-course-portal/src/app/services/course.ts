import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  private initialCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Web Development with Angular', code: 'CS202', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Systems', code: 'CS303', credits: 3, gradeStatus: 'passed' },
    { id: 4, name: 'Software Engineering', code: 'CS404', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Operating Systems Principles', code: 'CS505', credits: 3, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      tap(courses => console.log('Courses loaded via HTTP:', courses.length)),
      map(courses => courses.filter(c => c.credits > 0)),
      catchError(err => {
        console.warn('HTTP fetch failed, serving local initial courses fallback:', err.message);
        return of(this.initialCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(1),
      catchError(err => {
        const found = this.initialCourses.find(c => c.id === Number(id));
        if (found) {
          return of(found);
        }
        return throwError(() => new Error(`Course with ID ${id} not found.`));
      })
    );
  }

  addCourse(course: Omit<Course, 'id'> | Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError(() => {
        const newCourse: Course = {
          ...course,
          id: 'id' in course && course.id ? course.id : this.initialCourses.length + 1
        };
        this.initialCourses.push(newCourse);
        return of(newCourse);
      })
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      catchError(() => {
        const idx = this.initialCourses.findIndex(c => c.id === course.id);
        if (idx !== -1) {
          this.initialCourses[idx] = course;
        }
        return of(course);
      })
    );
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        this.initialCourses = this.initialCourses.filter(c => c.id !== id);
        return of({ success: true });
      })
    );
  }
}
