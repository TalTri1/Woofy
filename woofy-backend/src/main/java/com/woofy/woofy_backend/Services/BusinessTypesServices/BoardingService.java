package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.BoardingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardingService {

    private final BoardingRepository boardingRepository;
    private final BusinessRepository businessRepository;

    @Autowired
    public BoardingService(BoardingRepository boardingRepository, BusinessRepository businessRepository) {
        this.boardingRepository = boardingRepository;
        this.businessRepository = businessRepository;
    }

    public BoardingEntity createBoarding(BoardingEntity boardingDTO, Integer businessId) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));

        BoardingEntity boardingEntity = new BoardingEntity();

        if (business.getBoardingEntity() != null) {
            BoardingEntity existingBoarding = business.getBoardingEntity();
            return boardingRepository.save(existingBoarding);
        }

        boardingEntity.setBusiness(business);
        boardingEntity.setAcceptableDogSizes(boardingDTO.getAcceptableDogSizes());
        BoardingEntity savedBoarding = boardingRepository.save(boardingEntity);

        business.setBoardingEntity(savedBoarding);
        businessRepository.save(business);

        return savedBoarding;
    }

    public void deleteBoarding(Integer id) {
        boardingRepository.deleteById(id);
    }
}