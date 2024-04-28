package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogSitterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogSitterService {

    private final DogSitterRepository dogSitterRepository;
    private final BusinessRepository businessRepository;

    @Autowired
    public DogSitterService(DogSitterRepository dogSitterRepository, BusinessRepository businessRepository) {
        this.dogSitterRepository = dogSitterRepository;
        this.businessRepository = businessRepository;
    }

    public DogSitterEntity createDogSitter(DogSitterEntity dogSitter, Integer businessId) {
        BusinessEntity business = businessRepository.findById(Long.valueOf(businessId))
                .orElseThrow(() -> new RuntimeException("Business not found"));

        if (business.getDogSitterEntity() != null) {
            DogSitterEntity existingDogSitter = business.getDogSitterEntity();
            existingDogSitter.setHomeConditions(dogSitter.getHomeConditions());
            existingDogSitter.setPetsInHome(dogSitter.getPetsInHome());
            return dogSitterRepository.save(existingDogSitter);
        }

        dogSitter.setBusiness(business);
        DogSitterEntity savedDogSitter = dogSitterRepository.save(dogSitter);

        business.setDogSitterEntity(savedDogSitter);
        businessRepository.save(business);

        return savedDogSitter;
    }

    public void deleteDogSitter(Integer id) {
        dogSitterRepository.deleteById(id);
    }
}