export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  isEnrolled?: boolean;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourseIds: number[];
}
