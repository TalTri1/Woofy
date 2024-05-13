package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.BusinessTypeBaseRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessTypeService {

    @Autowired
    private BusinessRepository businessRepository;

    public BusinessTypeBaseEntity create(BusinessTypeBaseRequest  request, Integer businessId, BusinessTypeBaseEntity entity) {
        BusinessEntity business = businessRepository.findById(businessId)
                .orElseThrow(() -> new RuntimeException("Business not found"));

        entity.setBusiness(business);
        entity.setAcceptableDogSizes(request.getAcceptableDogSizes());
        entity.setDogCapacity(request.getDogCapacity());
        entity.setPrice(request.getPrice());
        entity.setStartDate(request.getStartDate());
        entity.setEndDate(request.getEndDate());
        entity.setStartTime(request.getStartTime());
        entity.setEndTime(request.getEndTime());
        entity.setWorkingDays(request.getWorkingDays());
        entity.setAbout(request.getAbout());
        entity.setImages(request.getImages());

        return entity;
    }
}