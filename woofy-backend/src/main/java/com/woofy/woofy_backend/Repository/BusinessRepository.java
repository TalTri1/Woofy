package com.woofy.woofy_backend.Repository;

import com.woofy.woofy_backend.Models.Entity.Business.BusinessEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<BusinessEntity, Long> {

}