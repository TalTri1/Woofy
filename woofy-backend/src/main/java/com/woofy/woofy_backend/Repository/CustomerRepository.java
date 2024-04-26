package com.woofy.woofy_backend.Repository;

import com.woofy.woofy_backend.Models.Entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {
}