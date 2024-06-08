package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.BoardingDTOs.CreateOrEditBoardingRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.BoardingRepository;
import jakarta.persistence.EntityNotFoundException;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BoardingService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private BoardingRepository boardingRepository;

    public BoardingEntity createBoarding(CreateOrEditBoardingRequest request, Integer businessId) {
        BoardingEntity boardingEntity = new BoardingEntity();
        boardingEntity.setHomeConditions(request.getHomeConditions());
        boardingEntity.setPetsInHome(request.getPetsInHome());
        boardingEntity.setDogCapacity(Integer.parseInt(request.getDogCapacity()));
        businessTypeService.create(request, businessId, boardingEntity);
        return boardingRepository.save(boardingEntity);
    }

    public BoardingEntity editBoarding(CreateOrEditBoardingRequest request, Integer id) {
        Optional<BoardingEntity> optionalBoardingEntity = boardingRepository.findById(id);

        if (optionalBoardingEntity.isPresent()) {
            BoardingEntity boardingEntity = editBoardingEntity(request, optionalBoardingEntity);

            return boardingRepository.save(boardingEntity);
        } else {
            throw new EntityNotFoundException("BoardingEntity with id " + id + " not found");
        }
    }

    private static @NotNull BoardingEntity editBoardingEntity(CreateOrEditBoardingRequest request, Optional<BoardingEntity> optionalBoardingEntity) {
        BoardingEntity boardingEntity = optionalBoardingEntity.get();

        if (request.getHomeConditions() != null) {
            boardingEntity.setHomeConditions(request.getHomeConditions());
        }
        if (request.getPetsInHome() != null) {
            boardingEntity.setPetsInHome(request.getPetsInHome());
        }

        if (request.getDogCapacity() != null) {
            boardingEntity.setDogCapacity(Integer.parseInt(request.getDogCapacity()));
        }
        return boardingEntity;
    }

    public void deleteBoarding(Integer id) {
        boardingRepository.deleteById(id);
    }
}
