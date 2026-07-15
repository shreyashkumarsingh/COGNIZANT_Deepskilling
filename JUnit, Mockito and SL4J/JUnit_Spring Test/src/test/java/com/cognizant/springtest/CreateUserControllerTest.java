package com.cognizant.springtest;

import com.cognizant.springtest.controller.UserController;
import com.cognizant.springtest.entity.User;
import com.cognizant.springtest.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
class CreateUserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UserService service;

    @Autowired
    ObjectMapper mapper;

    @Test
    void testCreateUser() throws Exception {

        User user = new User();

        user.setName("John");

        when(service.saveUser(any()))
                .thenReturn(user);

        mockMvc.perform(post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(user)))
                .andExpect(status().isOk());

    }

}
