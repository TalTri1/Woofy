package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTOs.DogDTOs.DogRegisterRequest;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.DogEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Services.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @PostMapping("/create")
    public Integer createDog(@RequestBody DogRegisterRequest dogDTO, Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        return dogService.createDog(dogDTO, user.getId()).getId();
//        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/delete/")
    public ResponseEntity<Void> deleteDog(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        dogService.deleteDog(user.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("/update/images/")
    public ResponseEntity<Void> updateDogImages(@RequestBody List<Integer> imageIds, Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Integer dogId;
        if (user instanceof CustomerEntity customer) {
            dogId = customer.getDog().getId();
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        ;
        try {
            dogService.updateDogImages(dogId, imageIds);
        } catch (Exception e) {
            deleteDog(principal);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}