package com.woofy.woofy_backend.Controllers;// In BusinessController.java
import com.woofy.woofy_backend.DTOs.BusinessDTOs.UpdateBusinessRequest;
import com.woofy.woofy_backend.Services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/business")
public class BusinessController {

    private final BusinessService businessService;

    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PutMapping("/update/{businessId}")
    public ResponseEntity<?> updateBusiness(@PathVariable Long businessId, @RequestBody UpdateBusinessRequest request) {
        return businessService.updateBusiness(businessId, request);
    }
}