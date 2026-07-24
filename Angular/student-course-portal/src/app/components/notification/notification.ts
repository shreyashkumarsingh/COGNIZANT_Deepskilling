import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

// Demonstrates component-level providing:
// Listing providers: [NotificationService] here creates a new, separate NotificationService
// instance scoped specifically to this component and its children, isolated from root injectors.
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationComponent implements OnInit {
  notifications: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.addNotification('Welcome to your personal student portal dashboard.');
    this.notificationService.addNotification('Course registration for next term opens soon.');
    this.notifications = this.notificationService.getNotifications();
  }
}
