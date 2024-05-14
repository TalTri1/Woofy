package com.woofy.woofy_backend.Controllers;// In BusinessController.java
import com.woofy.woofy_backend.DTOs.BusinessDTOs.BusinessUserSummaryDTO;
import com.woofy.woofy_backend.DTOs.BusinessDTOs.UpdateBusinessRequest;
import com.woofy.woofy_backend.DTOs.UserDTOs.UserSummaryDTO;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/business")
public class BusinessController {

    private final BusinessService businessService;
    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateBusiness(@RequestBody UpdateBusinessRequest request, Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        return businessService.updateBusiness(user.getId(), request);
    }

    // get all business
    @GetMapping("/all")
    public ResponseEntity<List<BusinessUserSummaryDTO>> getAllUsers() {
        List<BusinessUserSummaryDTO> users = businessService.getAllBusinessUsersSummary();
        return ResponseEntity.ok(users);
    }
}