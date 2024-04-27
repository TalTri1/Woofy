package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DayCareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayCareService {

    private final DayCareRepository dayCareRepository;

    @Autowired
    public DayCareService(DayCareRepository dayCareRepository) {
        this.dayCareRepository = dayCareRepository;
    }

    public DayCareEntity createDayCare(DayCareEntity dayCare) {
        return dayCareRepository.save(dayCare);
    }

    public void deleteDayCare(Integer id) {
        dayCareRepository.deleteById(id);
    }
}