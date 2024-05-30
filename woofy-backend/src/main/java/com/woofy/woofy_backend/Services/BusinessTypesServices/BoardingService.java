package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.BoardingDTOs.CreateBoardingRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.BoardingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardingService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private BoardingRepository boardingRepository;

    public BoardingEntity createBoarding(CreateBoardingRequest request, Integer businessId) {
        BoardingEntity boardingEntity = new BoardingEntity();
        boardingEntity.setHomeConditions(request.getHomeConditions());
        boardingEntity.setPetsInHome(request.getPetsInHome());
        boardingEntity.setDogCapacity(request.getDogCapacity());
        businessTypeService.create(request, businessId, boardingEntity);
        return boardingRepository.save(boardingEntity);
    }

    public void deleteBoarding(Integer id) {
        boardingRepository.deleteById(id);
    }
}