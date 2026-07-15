package com.cognizant.mockito;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class NotificationServiceTest {

    @Test
    void testVoidMethod() {

        EmailService emailService = mock(EmailService.class);

        doNothing().when(emailService).sendEmail(anyString());

        NotificationService service =
                new NotificationService(emailService);

        service.notifyUser("Hello");

        verify(emailService).sendEmail("Hello");

    }

}
