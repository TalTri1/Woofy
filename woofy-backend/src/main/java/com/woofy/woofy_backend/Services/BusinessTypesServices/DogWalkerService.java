package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogWalkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogWalkerService {

    private final DogWalkerRepository dogWalkerRepository;
    private final BusinessRepository businessRepository;

    @Autowired
    public DogWalkerService(DogWalkerRepository dogWalkerRepository, BusinessRepository businessRepository) {
        this.dogWalkerRepository = dogWalkerRepository;
        this.businessRepository = businessRepository;
    }

    public DogWalkerEntity createDogWalker(DogWalkerEntity dogWalker, Integer businessId) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));

        if (business.getDogWalkerEntity() != null) {
            DogWalkerEntity existingDogWalker = business.getDogWalkerEntity();
            existingDogWalker.setHomeConditions(dogWalker.getHomeConditions());
            existingDogWalker.setPetsInHome(dogWalker.getPetsInHome());
            existingDogWalker.setAcceptableDogSizes(dogWalker.getAcceptableDogSizes());
            return dogWalkerRepository.save(existingDogWalker);
        }

        dogWalker.setBusiness(business);
        dogWalker.setAcceptableDogSizes(dogWalker.getAcceptableDogSizes());
        DogWalkerEntity savedDogWalker = dogWalkerRepository.save(dogWalker);

        business.setDogWalkerEntity(savedDogWalker);
        businessRepository.save(business);

        return savedDogWalker;
    }

    public void deleteDogWalker(Integer id) {
        dogWalkerRepository.deleteById(id);
    }
}