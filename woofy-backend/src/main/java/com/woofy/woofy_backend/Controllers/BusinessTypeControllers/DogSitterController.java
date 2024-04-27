package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogSitterDTOs.CreateDogSitterRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogSitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/business/dogsitter")
public class DogSitterController {

    private final DogSitterService dogSitterService;

    @Autowired
    public DogSitterController(DogSitterService dogSitterService) {
        this.dogSitterService = dogSitterService;
    }

    @PostMapping("/create")
    public DogSitterEntity createDogSitter(@RequestBody CreateDogSitterRequest createDogSitterRequest) {
        DogSitterEntity dogSitterEntity = new DogSitterEntity();
        dogSitterEntity.setHomeConditions(createDogSitterRequest.getHomeConditions());
        dogSitterEntity.setPetsInHome(createDogSitterRequest.getPetsInHome());
        return dogSitterService.createDogSitter(dogSitterEntity);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDogSitter(@PathVariable Integer id) {
        dogSitterService.deleteDogSitter(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}