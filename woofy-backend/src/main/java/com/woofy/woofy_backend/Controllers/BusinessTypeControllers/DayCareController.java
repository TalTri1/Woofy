package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.DayCareDTOs.CreateDayCareRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DayCareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/business-type/day-care")
public class DayCareController {

    private final DayCareService dayCareService;
    private final BusinessRepository businessRepository;

    @Autowired
    public DayCareController(DayCareService dayCareService, BusinessRepository businessRepository) {
        this.dayCareService = dayCareService;
        this.businessRepository = businessRepository;
    }

    @PostMapping("/create/{businessId}")
    public DayCareEntity createDayCare(@PathVariable Integer businessId, @RequestBody CreateDayCareRequest dayCareDTO) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));
        DayCareEntity dayCareEntity = new DayCareEntity();
        dayCareEntity.setBusiness(business);
        dayCareEntity.setAcceptableDogSizes(dayCareDTO.getAcceptableDogSizes());
        return dayCareService.createDayCare(dayCareEntity, businessId);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDayCare(@PathVariable Integer id) {
        dayCareService.deleteDayCare(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}