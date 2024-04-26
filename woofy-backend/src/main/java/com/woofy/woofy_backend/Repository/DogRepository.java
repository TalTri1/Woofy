package com.woofy.woofy_backend.Repository;

import com.woofy.woofy_backend.Models.Entity.DogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<DogEntity, Long> {}
