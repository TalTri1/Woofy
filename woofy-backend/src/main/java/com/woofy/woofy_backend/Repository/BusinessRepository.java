package com.woofy.woofy_backend.Repository;

import com.woofy.woofy_backend.Models.Entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BusinessRepository extends JpaRepository<Business, Long> {

}