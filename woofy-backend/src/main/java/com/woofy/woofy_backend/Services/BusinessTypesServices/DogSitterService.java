package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogSitterDTOs.CreateDogSitterRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogSitterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogSitterService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private DogSitterRepository dogSitterRepository;

    public DogSitterEntity createDogSitter(CreateDogSitterRequest request, Integer businessId) {
        DogSitterEntity dogSitterEntity = new DogSitterEntity();
        businessTypeService.create(request, businessId, dogSitterEntity);
        return dogSitterRepository.save(dogSitterEntity);
    }

    public void deleteDogSitter(Integer id) {
        dogSitterRepository.deleteById(id);
    }
}