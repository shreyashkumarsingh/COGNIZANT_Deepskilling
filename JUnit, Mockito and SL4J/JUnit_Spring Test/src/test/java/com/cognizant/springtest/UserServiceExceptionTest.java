package com.cognizant.springtest;

import com.cognizant.springtest.repository.UserRepository;
import com.cognizant.springtest.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceExceptionTest {

    @Mock
    UserRepository repository;

    @InjectMocks
    UserService service;

    @Test
    void userNotFound() {

        when(repository.findById(100L))
                .thenReturn(Optional.empty());

        assertNull(service.getUserById(100L));

    }

}
