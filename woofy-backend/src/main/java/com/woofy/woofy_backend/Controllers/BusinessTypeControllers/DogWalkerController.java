package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogWalkerDTOs.CreateDogWalkerRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogWalkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/business/business-type/dog-walker")
public class DogWalkerController {

    private final DogWalkerService dogWalkerService;
    private final BusinessRepository businessRepository;


    @Autowired
    public DogWalkerController(DogWalkerService dogWalkerService, BusinessRepository businessRepository) {
        this.dogWalkerService = dogWalkerService;
        this.businessRepository = businessRepository;
    }

    @PostMapping("/create")
    public ResponseEntity<Void>  createDogWalker(@RequestBody CreateDogWalkerRequest dogWalkerDTO, Principal principal){
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("Business not found"));

        DogWalkerEntity dogWalkerEntity = new DogWalkerEntity();
        dogWalkerEntity.setHomeConditions(dogWalkerDTO.getHomeConditions());
        dogWalkerEntity.setPetsInHome(dogWalkerDTO.getPetsInHome());
        dogWalkerEntity.setAcceptableDogSizes(dogWalkerDTO.getAcceptableDogSizes());
        dogWalkerEntity.setBusiness(business);

        dogWalkerService.createDogWalker(dogWalkerEntity, user.getId());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteDogWalker(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        dogWalkerService.deleteDogWalker(user.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}