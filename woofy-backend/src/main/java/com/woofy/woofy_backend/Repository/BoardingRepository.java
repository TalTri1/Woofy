package com.woofy.woofy_backend.Repository;

import com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.StayAtBusiness.BoardingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardingRepository extends JpaRepository<BoardingEntity, Integer> {
}