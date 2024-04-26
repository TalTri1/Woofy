package com.woofy.woofy_backend.Repository;

import java.util.Optional;

import com.woofy.woofy_backend.Models.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    Optional<UserEntity> findByEmail(String email);

}