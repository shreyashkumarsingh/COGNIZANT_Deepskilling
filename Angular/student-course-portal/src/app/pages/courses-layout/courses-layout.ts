import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<div class="courses-layout"><router-outlet></router-outlet></div>`,
  styles: [`.courses-layout { width: 100%; }`]
})
export class CoursesLayoutComponent {}
