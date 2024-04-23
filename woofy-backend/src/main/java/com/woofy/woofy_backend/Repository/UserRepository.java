package com.woofy.woofy_backend.Repository;

import java.util.Optional;

import com.woofy.woofy_backend.Models.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

}