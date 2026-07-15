package com.cognizant.springtest.service;

import com.cognizant.springtest.entity.User;
import com.cognizant.springtest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User getUserById(Long id) {
        return repository.findById(id)
                .orElse(null);
    }

    public User saveUser(User user) {
        return repository.save(user);
    }

}
