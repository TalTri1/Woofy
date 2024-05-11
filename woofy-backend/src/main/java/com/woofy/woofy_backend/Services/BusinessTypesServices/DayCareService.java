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

    public DayCareEntity createDayCare(DayCareEntity dayCareDTO, BusinessEntity businessEntity) {


        DayCareEntity dayCareEntity = new DayCareEntity();

        if (businessEntity.getDayCareEntity() != null) {
            DayCareEntity existingDayCare = businessEntity.getDayCareEntity();
            return dayCareRepository.save(existingDayCare);
        }

        dayCareEntity.setBusiness(businessEntity);
        dayCareEntity.setAcceptableDogSizes(dayCareDTO.getAcceptableDogSizes());
        DayCareEntity savedDayCare = dayCareRepository.save(dayCareEntity);

        businessEntity.setDayCareEntity(savedDayCare);
        businessRepository.save(businessEntity);

        return savedDayCare;
    }

    public void deleteDayCare(Integer id) {
        dayCareRepository.deleteById(id);
    }
}