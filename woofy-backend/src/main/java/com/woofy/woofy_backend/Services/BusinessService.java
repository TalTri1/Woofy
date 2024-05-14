package com.woofy.woofy_backend.Services;// In BusinessService.java

import com.woofy.woofy_backend.DTOs.BusinessDTOs.BusinessUserSummaryDTO;
import com.woofy.woofy_backend.DTOs.BusinessDTOs.UpdateBusinessRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Services.Map.GeoLocation;
import com.woofy.woofy_backend.Services.Map.GeocodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BusinessService {

    private final BusinessRepository businessRepository;
    private final GeocodingService geocodingService;

    @Autowired
    public BusinessService(BusinessRepository businessRepository, GeocodingService geocodingService) {
        this.businessRepository = businessRepository;
        this.geocodingService = geocodingService;
    }

    public ResponseEntity<?> updateBusiness(Integer businessId, UpdateBusinessRequest request) {
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

    public BusinessEntity getBusiness(Integer businessId) {
        return businessRepository.findById(businessId)
                .orElseThrow(() -> new RuntimeException("Business not found with id " + businessId));
    }

    public List<BusinessUserSummaryDTO> getAllBusinessUsersSummary() {
        return businessRepository.findAll().stream()
                .filter(businessEntity -> businessEntity.getRole() == RoleEnum.BUSINESS)
                .map(this::mapToBusinessUserSummaryDTO)
                .collect(Collectors.toList());
    }

    private BusinessUserSummaryDTO mapToBusinessUserSummaryDTO(BusinessEntity businessEntity) {
        BusinessUserSummaryDTO dto = new BusinessUserSummaryDTO();
        dto.setFirstName(businessEntity.getFirstName());
        dto.setLastName(businessEntity.getLastName());
        dto.setPhoneNumber(businessEntity.getPhoneNumber());
        dto.setAddress(businessEntity.getAddress());
        dto.setCity(businessEntity.getCity());
        dto.setRole(businessEntity.getRole());
        dto.setAbout(businessEntity.getAbout());
        dto.setBusinessName(businessEntity.getBusinessName());
        dto.setSocialMedia(businessEntity.getSocialMedia());
        dto.setWebsite(businessEntity.getWebsite());
        dto.setLat(businessEntity.getLat());
        dto.setLon(businessEntity.getLon());

        Optional.ofNullable(businessEntity.getDogSitterEntity()).ifPresent(dogSitter -> {
            mapBusinessEntityToDTO(dto, dogSitter, "Dog Sitter");
        });

        Optional.ofNullable(businessEntity.getBoardingEntity()).ifPresent(boarding -> {
            mapBusinessEntityToDTO(dto, boarding, "Boarding");
        });

        Optional.ofNullable(businessEntity.getDayCareEntity()).ifPresent(dayCare -> {
            mapBusinessEntityToDTO(dto, dayCare, "Day Care");
        });

        Optional.ofNullable(businessEntity.getDogWalkerEntity()).ifPresent(dogWalker -> {
            mapBusinessEntityToDTO(dto, dogWalker, "Dog Walker");
        });

        return dto;
    }

    private void mapBusinessEntityToDTO(BusinessUserSummaryDTO dto, BusinessTypeBaseEntity entity, String businessType) {
        dto.setAcceptableDogSizes(entity.getAcceptableDogSizes());
        dto.setDogCapacity(entity.getDogCapacity());
        dto.setStartDate(entity.getStartDate());
        dto.setEndDate(entity.getEndDate());
        dto.setStartTime(entity.getStartTime());
        dto.setEndTime(entity.getEndTime());
        dto.setBusinessType(businessType);
        dto.setPrice(entity.getPrice());
        dto.setWorkingDays(entity.getWorkingDays());
    }

}