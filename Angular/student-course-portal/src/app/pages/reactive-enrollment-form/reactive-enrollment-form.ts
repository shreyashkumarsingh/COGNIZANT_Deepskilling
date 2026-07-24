import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ComponentWithUnsavedChanges } from '../../guards/unsaved-changes';

// Custom Synchronous Validator disallowing codes starting with 'XX'
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '').toUpperCase();
  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom Asynchronous Validator simulating API email check
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      const email = String(control.value || '').toLowerCase();
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrls: ['./reactive-enrollment-form.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit, ComponentWithUnsavedChanges {
  enrollForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // Typed getter provides compile-time safety and cleaner template syntax without template casting
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourseControl(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourseControl(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Implementation for CanDeactivate UnsavedChangesGuard
  hasUnsavedChanges(): boolean {
    return this.enrollForm ? this.enrollForm.dirty && !this.submitted : false;
  }

  onSubmit(): void {
    // Difference: enrollForm.value excludes disabled controls; enrollForm.getRawValue() includes all controls.
    console.log('Reactive Form Value (Excludes disabled controls):', this.enrollForm.value);
    console.log('Reactive Form Raw Value (Includes all controls):', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
      this.enrollForm.markAsPristine();
    }
  }

  onReset(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.submitted = false;
  }
}
