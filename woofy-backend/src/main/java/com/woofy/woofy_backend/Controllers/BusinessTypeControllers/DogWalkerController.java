package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogWalkerDTOs.CreateDogWalkerRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogWalkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/business-type/dog-walker")
public class DogWalkerController {

    private final DogWalkerService dogWalkerService;
    private final BusinessRepository businessRepository;


    @Autowired
    public DogWalkerController(DogWalkerService dogWalkerService, BusinessRepository businessRepository) {
        this.dogWalkerService = dogWalkerService;
        this.businessRepository = businessRepository;
    }

    @PostMapping("/create/{businessId}")
    public DogWalkerEntity createDogWalker(@PathVariable Integer businessId, @RequestBody CreateDogWalkerRequest dogWalkerDTO) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));

        DogWalkerEntity dogWalkerEntity = new DogWalkerEntity();
        dogWalkerEntity.setHomeConditions(dogWalkerDTO.getHomeConditions());
        dogWalkerEntity.setPetsInHome(dogWalkerDTO.getPetsInHome());
        dogWalkerEntity.setBusiness(business);

        return dogWalkerService.createDogWalker(dogWalkerEntity, businessId);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDogWalker(@PathVariable Integer id) {
        dogWalkerService.deleteDogWalker(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}