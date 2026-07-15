package com.cognizant.mockito;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Test
    void testArgumentMatcher() {

        UserRepository repository = mock(UserRepository.class);

        when(repository.findById(anyInt()))
                .thenReturn("Shreyash");

        UserService service = new UserService(repository);

        assertEquals("Shreyash", service.getUser(101));

        verify(repository).findById(anyInt());

    }

}
