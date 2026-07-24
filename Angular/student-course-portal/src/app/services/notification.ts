import { Injectable } from '@angular/core';

// This service can be provided at component level via providers: [NotificationService]
// in the @Component decorator, creating a component-scoped instance rather than a root singleton.
@Injectable()
export class NotificationService {
  private notifications: string[] = [];

  addNotification(message: string): void {
    this.notifications.push(message);
  }

  getNotifications(): string[] {
    return [...this.notifications];
  }

  clear(): void {
    this.notifications = [];
  }
}
