package com.cognizant.mockito;

public class NotificationService {

    private final EmailService emailService;

    public NotificationService(EmailService emailService) {

        this.emailService = emailService;

    }

    public void notifyUser(String message) {

        emailService.sendEmail(message);

    }

}
