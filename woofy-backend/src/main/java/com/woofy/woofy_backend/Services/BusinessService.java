package com.woofy.woofy_backend.Services;// In BusinessService.java
import com.woofy.woofy_backend.DTOs.BusinessDTOs.UpdateBusinessRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BusinessService {

    private final BusinessRepository businessRepository;

    @Autowired
    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }

    public ResponseEntity<?> updateBusiness(Long businessId, UpdateBusinessRequest request) {
        BusinessEntity business = businessRepository.findById(businessId)
                .orElseThrow(() -> new RuntimeException("Business not found"));

        business.setBusinessName(request.getBusinessName());
        business.setAbout(request.getAbout());
        business.setBusinessTypes(request.getBusinessTypes());
        business.setWebsite(request.getWebsite());
        business.setSocialMedia(request.getSocialMedia());

        businessRepository.save(business);

        return ResponseEntity.ok("Business updated successfully");
    }
}