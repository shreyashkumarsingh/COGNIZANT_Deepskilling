import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Interpolation property
  portalName: string = 'Student Course Portal';

  // Property binding control
  isPortalActive: boolean = true;

  // Event binding message
  message: string = '';

  // Two-way binding property
  searchTerm: string = '';

  // Stats loaded from service
  coursesCount: number = 12;
  enrolledCount: number = 3;
  gpa: number = 3.8;

  // [property] (one-way: Component -> DOM) sends data from component property to DOM element attribute.
  // [(ngModel)] (two-way: DOM <-> Component) synchronizes DOM user input with component state bidirectionally.

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe(courses => {
      this.coursesCount = courses.length;
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
