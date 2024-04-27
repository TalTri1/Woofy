package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogWalkerDTOs.CreateDogWalkerRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogWalkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/business/dogwalker")
public class DogWalkerController {

    private final DogWalkerService dogWalkerService;

    @Autowired
    public DogWalkerController(DogWalkerService dogWalkerService) {
        this.dogWalkerService = dogWalkerService;
    }

    @PostMapping("/create")
    public DogWalkerEntity createDogWalker(@RequestBody CreateDogWalkerRequest dogWalkerDTO) {
        DogWalkerEntity dogWalkerEntity = new DogWalkerEntity();
        //dogWalkerEntity.setId(dogWalkerDTO.getId());  // TODO add all dogwalker details
        dogWalkerEntity.setHomeConditions(dogWalkerDTO.getHomeConditions());
        dogWalkerEntity.setPetsInHome(dogWalkerDTO.getPetsInHome());
        return dogWalkerService.createDogWalker(dogWalkerEntity);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDogWalker(@PathVariable Integer id) {
        dogWalkerService.deleteDogWalker(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}