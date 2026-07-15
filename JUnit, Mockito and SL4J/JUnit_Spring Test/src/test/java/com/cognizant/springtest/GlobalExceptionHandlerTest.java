package com.cognizant.springtest;

import com.cognizant.springtest.controller.UserController;
import com.cognizant.springtest.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.NoSuchElementException;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
class GlobalExceptionHandlerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UserService service;

    @Test
    void exceptionTest() throws Exception {

        when(service.getUserById(10L))
                .thenThrow(new NoSuchElementException());

        mockMvc.perform(get("/users/10"))
                .andExpect(status().isNotFound())
                .andExpect(content()
                        .string("User not found"));

    }

}
