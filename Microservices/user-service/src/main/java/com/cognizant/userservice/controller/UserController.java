package com.cognizant.userservice.controller;

import com.cognizant.userservice.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return new User(id, "Alex Johnson", "alex.johnson@cognizant.com");
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        if (user.getId() == null) {
            user.setId(101L);
        }
        return user;
    }
}
