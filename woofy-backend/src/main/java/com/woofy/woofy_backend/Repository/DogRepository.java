package com.woofy.woofy_backend.Repository;

import com.woofy.woofy_backend.Models.Entity.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<Dog, Long> {}
