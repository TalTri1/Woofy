package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTOs.DogDTOs.DogRegisterRequest;
import com.woofy.woofy_backend.Models.Entities.DogEntity;
import com.woofy.woofy_backend.Services.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// DogController.java
@RestController
@RequestMapping("/api/v1/dogs")
public class DogController {
    private final DogService dogService;

    @Autowired
    public DogController(DogService dogService) {
        this.dogService = dogService;
    }

    @PostMapping("/create/{customerId}")
    public Integer createDog(@PathVariable Long customerId, @RequestBody DogRegisterRequest dogDTO) {
        return dogService.createDog(dogDTO, customerId).getId();
//        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDog(@PathVariable Long id) {
        dogService.deleteDog(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("/update/images/{dogId}")
    public ResponseEntity<Void> updateDogImages(@PathVariable Long dogId, @RequestBody List<Long> imageIds) {
        try {
            dogService.updateDogImages(dogId, imageIds);
        } catch (Exception e) {
            deleteDog(dogId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}