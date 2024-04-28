package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.BoardingDTOs.CreateBoardingRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Services.BusinessTypesServices.BoardingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/business-type/boarding")
public class BoardingController {

    private final BoardingService boardingService;

    @Autowired
    public BoardingController(BoardingService boardingService) {
        this.boardingService = boardingService;
    }

    @PostMapping("/create")
    public BoardingEntity createBoarding(@RequestBody CreateBoardingRequest boardingDTO) {
        BoardingEntity boardingEntity = new BoardingEntity();
        //boardingEntity.setId(boardingDTO.getId());  // TODO add all boarding details
        return boardingService.createBoarding(boardingEntity);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBoarding(@PathVariable Integer id) {
        boardingService.deleteBoarding(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}