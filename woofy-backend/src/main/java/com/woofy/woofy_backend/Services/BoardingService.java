package com.woofy.woofy_backend.Services;

import com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Repository.BoardingRepository;
import org.springframework.stereotype.Service;

@Service
public class BoardingService {

    private BoardingRepository boardingRepository;

    public BoardingEntity createBoarding(BoardingEntity boarding) {
        return boardingRepository.save(boarding);
    }
}