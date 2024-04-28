package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogSitterDTOs.CreateDogSitterRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogSitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/business-type/dog-sitter")
public class DogSitterController {

    private final DogSitterService dogSitterService;
    private final BusinessRepository businessRepository;

    @Autowired
    public DogSitterController(DogSitterService dogSitterService, BusinessRepository businessRepository) {
        this.dogSitterService = dogSitterService;
        this.businessRepository = businessRepository;
    }

    @PostMapping("/create/{businessId}")
    public DogSitterEntity createDogSitter(@PathVariable Integer businessId, @RequestBody CreateDogSitterRequest dogSitterDTO) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));

        DogSitterEntity dogSitterEntity = new DogSitterEntity();
        dogSitterEntity.setHomeConditions(dogSitterDTO.getHomeConditions());
        dogSitterEntity.setPetsInHome(dogSitterDTO.getPetsInHome());
        dogSitterEntity.setAcceptableDogSizes(dogSitterDTO.getAcceptableDogSizes()); // Ensure this line is present
        dogSitterEntity.setBusiness(business);

        return dogSitterService.createDogSitter(dogSitterEntity, businessId);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDogSitter(@PathVariable Integer id) {
        dogSitterService.deleteDogSitter(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}