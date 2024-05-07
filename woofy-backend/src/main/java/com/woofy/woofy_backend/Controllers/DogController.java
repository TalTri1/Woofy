package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTOs.DogDTOs.DogRegisterRequest;
import com.woofy.woofy_backend.Models.Entities.DogEntity;
import com.woofy.woofy_backend.Services.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public DogEntity createDog(@PathVariable Long customerId, @RequestBody DogRegisterRequest dogDTO) {
        return dogService.createDog(dogDTO, customerId);
    }
}