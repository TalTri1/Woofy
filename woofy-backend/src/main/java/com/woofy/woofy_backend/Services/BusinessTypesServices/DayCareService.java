package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs.DayCareDTOs.CreateOrEditDayCareRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DayCareRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DayCareService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private DayCareRepository dayCareRepository;

    public DayCareEntity createDayCare(CreateOrEditDayCareRequest request, Integer businessId) {
        DayCareEntity dayCareEntity = new DayCareEntity();
        dayCareEntity.setHomeConditions(request.getHomeConditions());
        dayCareEntity.setPetsInHome(request.getPetsInHome());
        dayCareEntity.setDogCapacity(Integer.parseInt(request.getDogCapacity()));
        businessTypeService.create(request, businessId, dayCareEntity);
        return dayCareRepository.save(dayCareEntity);
    }

    public DayCareEntity editDayCare(CreateOrEditDayCareRequest request, Integer id) {
        Optional<DayCareEntity> optionalDayCare = dayCareRepository.findById(id);
        if (optionalDayCare.isPresent()) {
            DayCareEntity dayCareEntity = optionalDayCare.get();

            if (request.getHomeConditions() != null) {
                dayCareEntity.setHomeConditions(request.getHomeConditions());
            }
            if (request.getPetsInHome() != null) {
                dayCareEntity.setPetsInHome(request.getPetsInHome());
            }
            if (request.getDogCapacity() != null) {
                dayCareEntity.setDogCapacity(Integer.parseInt(request.getDogCapacity()));
            }
            return dayCareRepository.save(dayCareEntity);
        } else {
            throw new EntityNotFoundException("DayCareEntity with ID " + id + " not found.");
        }
    }

    public void deleteDayCare(Integer id) {
        dayCareRepository.deleteById(id);
    }
}