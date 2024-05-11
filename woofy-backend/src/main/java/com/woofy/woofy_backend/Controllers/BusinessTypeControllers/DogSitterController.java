package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogSitterDTOs.CreateDogSitterRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.UserRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DogSitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/business/business-type/dog-sitter")
public class DogSitterController {

    private final DogSitterService dogSitterService;
    private final BusinessRepository businessRepository;
    private final UserRepository userRepository;

    @Autowired
    public DogSitterController(DogSitterService dogSitterService, BusinessRepository businessRepository, UserRepository userRepository) {
        this.dogSitterService = dogSitterService;
        this.businessRepository = businessRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createDogSitter(@RequestBody CreateDogSitterRequest dogSitterDTO, Principal connectedUser) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        UserEntity business = userRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("Business not found"));

        DogSitterEntity dogSitterEntity = new DogSitterEntity();
        dogSitterEntity.setHomeConditions(dogSitterDTO.getHomeConditions());
        dogSitterEntity.setPetsInHome(dogSitterDTO.getPetsInHome());
        dogSitterEntity.setAcceptableDogSizes(dogSitterDTO.getAcceptableDogSizes()); // Ensure this line is present
        dogSitterEntity.setBusiness((BusinessEntity)business);

        dogSitterService.createDogSitter(dogSitterEntity, user.getId());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteDogSitter(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        dogSitterService.deleteDogSitter(user.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}