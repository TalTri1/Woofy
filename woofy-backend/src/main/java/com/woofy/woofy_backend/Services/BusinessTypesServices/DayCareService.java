package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DayCareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayCareService {

    private final DayCareRepository dayCareRepository;
    private final BusinessRepository businessRepository;

    @Autowired
    public DayCareService(DayCareRepository dayCareRepository, BusinessRepository businessRepository) {
        this.dayCareRepository = dayCareRepository;
        this.businessRepository = businessRepository;
    }

    public DayCareEntity createDayCare(DayCareEntity dayCareDTO, Integer businessId) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));

        DayCareEntity dayCareEntity = new DayCareEntity();

        if (business.getDayCareEntity() != null) {
            DayCareEntity existingDayCare = business.getDayCareEntity();
            return dayCareRepository.save(existingDayCare);
        }

        dayCareEntity.setBusiness(business);
        dayCareEntity.setAcceptableDogSizes(dayCareDTO.getAcceptableDogSizes());
        DayCareEntity savedDayCare = dayCareRepository.save(dayCareEntity);

        business.setDayCareEntity(savedDayCare);
        businessRepository.save(business);

        return savedDayCare;
    }

    public void deleteDayCare(Integer id) {
        dayCareRepository.deleteById(id);
    }
}