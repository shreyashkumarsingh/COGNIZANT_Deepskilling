package com.cognizant.mockdep.service;

import com.cognizant.mockdep.entity.User;
import com.cognizant.mockdep.repository.UserRepository;
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
