package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.DayCareDTOs.CreateDayCareRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DayCareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayCareService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private DayCareRepository dayCareRepository;

    public DayCareEntity createDayCare(CreateDayCareRequest request, Integer businessId) {
        DayCareEntity dayCareEntity = new DayCareEntity();
        dayCareEntity.setHomeConditions(request.getHomeConditions());
        dayCareEntity.setPetsInHome(request.getPetsInHome());
        businessTypeService.create(request, businessId, dayCareEntity);
        return dayCareRepository.save(dayCareEntity);
    }

    public void deleteDayCare(Integer id) {
        dayCareRepository.deleteById(id);
    }
}