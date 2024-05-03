package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.BoardingDTOs.CreateBoardingRequest;
import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.DayCareDTOs.CreateDayCareRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.BoardingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/business-type/boarding")
public class BoardingController {

    private final BoardingService boardingService;
    private final BusinessRepository businessRepository;


    @Autowired
    public BoardingController(BoardingService boardingService, BusinessRepository businessRepository) {

        this.boardingService = boardingService;
        this.businessRepository = businessRepository;

    }

    @PostMapping("/create/{businessId}")
    public BoardingEntity createBoarding(@PathVariable Integer businessId, @RequestBody CreateBoardingRequest boardingDTO) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));
        BoardingEntity boardingEntity = new BoardingEntity();
        boardingEntity.setBusiness(business);
        boardingEntity.setAcceptableDogSizes(boardingDTO.getAcceptableDogSizes());
        return boardingService.createBoarding(boardingEntity, businessId);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBoarding(@PathVariable Integer id) {
        boardingService.deleteBoarding(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}