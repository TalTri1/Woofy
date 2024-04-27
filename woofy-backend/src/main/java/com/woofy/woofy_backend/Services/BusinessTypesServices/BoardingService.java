package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.BoardingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardingService {

    private final BoardingRepository boardingRepository;

    @Autowired
    public BoardingService(BoardingRepository boardingRepository) {
        this.boardingRepository = boardingRepository;
    }

    public BoardingEntity createBoarding(BoardingEntity boarding) {
        return boardingRepository.save(boarding);
    }

    public void deleteBoarding(Integer id) {
        boardingRepository.deleteById(id);
    }
}