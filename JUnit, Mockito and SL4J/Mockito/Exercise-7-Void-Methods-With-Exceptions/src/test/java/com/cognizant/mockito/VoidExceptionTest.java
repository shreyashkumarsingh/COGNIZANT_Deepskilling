package com.cognizant.mockito;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class VoidExceptionTest {

    @Test
    void testVoidMethodException() {

        EmailService emailService = mock(EmailService.class);

        doThrow(new RuntimeException("Email Failed"))
                .when(emailService)
                .sendEmail(anyString());

        NotificationService service =
                new NotificationService(emailService);

        assertThrows(
                RuntimeException.class,
                () -> service.notifyUser("Hello")
        );

    }

}
