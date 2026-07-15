package com.cognizant.mockdep.repository;

import com.cognizant.mockdep.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
