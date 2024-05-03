package com.woofy.woofy_backend.Controllers.BusinessTypeControllers;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.DayCareDTOs.CreateDayCareRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Services.BusinessTypesServices.DayCareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/business/daycare")
public class DayCareController {

    private final DayCareService dayCareService;

    @Autowired
    public DayCareController(DayCareService dayCareService) {
        this.dayCareService = dayCareService;
    }

    @PostMapping("/create/{businessId}")
    public DayCareEntity createDayCare(@PathVariable Integer businessId, @RequestBody CreateDayCareRequest dayCareDTO) {
        return dayCareService.createDayCare(dayCareDTO, businessId);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDayCare(@PathVariable Integer id) {
        dayCareService.deleteDayCare(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}