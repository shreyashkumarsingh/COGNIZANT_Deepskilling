package com.cognizant.springtest;

import com.cognizant.springtest.entity.User;
import com.cognizant.springtest.repository.UserRepository;
import com.cognizant.springtest.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    UserRepository repository;

    @InjectMocks
    UserService service;

    @Test
    void testRepositoryMock() {

        User user = new User();

        user.setId(1L);
        user.setName("Shreyash");

        when(repository.findById(1L))
                .thenReturn(Optional.of(user));

        User result = service.getUserById(1L);

        assertEquals("Shreyash",
                result.getName());

    }

}
