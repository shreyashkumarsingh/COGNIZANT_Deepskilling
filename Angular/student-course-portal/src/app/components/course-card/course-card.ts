import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Input() isEnrolled: boolean = false;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'CourseCardComponent ngOnChanges — Prev:',
        changes['course'].previousValue,
        'Current:',
        changes['course'].currentValue
      );
    }
  }

  // Getter keeps template clean by encapsulating complex conditional logic in TypeScript
  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course ? this.course.credits >= 4 : false,
      'expanded': this.isExpanded
    };
  }

  get borderStyle(): { [key: string]: string } {
    const status = this.course?.gradeStatus;
    let color = '#94a3b8'; // grey
    if (status === 'passed') color = '#22c55e'; // green
    if (status === 'failed') color = '#ef4444'; // red
    return { 'border-left': `6px solid ${color}` };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    if (this.course) {
      this.enrollRequested.emit(this.course.id);
    }
  }
}
