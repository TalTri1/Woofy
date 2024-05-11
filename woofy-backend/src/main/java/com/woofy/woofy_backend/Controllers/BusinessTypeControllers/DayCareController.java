package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.DayCareDTOs.CreateDayCareRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.UserRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DayCareService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/business/business-type/day-care")
@RequiredArgsConstructor
public class DayCareController {

    private final DayCareService dayCareService;
    private final BusinessRepository businessRepository;
    private final UserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity<Void> createDayCare(@RequestBody CreateDayCareRequest dayCareDTO, Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        DayCareEntity dayCareEntity = new DayCareEntity();
        dayCareEntity.setBusiness((BusinessEntity)user);
        dayCareEntity.setAcceptableDogSizes(dayCareDTO.getAcceptableDogSizes());
        dayCareService.createDayCare(dayCareEntity, (BusinessEntity)user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteDayCare(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        dayCareService.deleteDayCare(user.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}