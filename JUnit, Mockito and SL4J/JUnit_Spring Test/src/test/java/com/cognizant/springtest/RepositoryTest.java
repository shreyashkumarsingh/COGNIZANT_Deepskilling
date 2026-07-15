package com.cognizant.springtest;

import com.cognizant.springtest.entity.User;
import com.cognizant.springtest.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
class RepositoryTest {

    @Autowired
    UserRepository repository;

    @Test
    void findByNameTest() {

        User user = new User();

        user.setName("Shreyash");

        repository.save(user);

        assertEquals(
                1,
                repository.findByName("Shreyash")
                        .size());

    }

}
