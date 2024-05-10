package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogSitterDTOs.CreateDogSitterRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogSitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

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

    @PostMapping("/create")
    public DogSitterEntity createDogSitter(@RequestBody CreateDogSitterRequest dogSitterDTO, Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("Business not found"));

        DogSitterEntity dogSitterEntity = new DogSitterEntity();
        dogSitterEntity.setHomeConditions(dogSitterDTO.getHomeConditions());
        dogSitterEntity.setPetsInHome(dogSitterDTO.getPetsInHome());
        dogSitterEntity.setAcceptableDogSizes(dogSitterDTO.getAcceptableDogSizes()); // Ensure this line is present
        dogSitterEntity.setBusiness(business);

        return dogSitterService.createDogSitter(dogSitterEntity, user.getId());
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteDogSitter(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        dogSitterService.deleteDogSitter(user.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}