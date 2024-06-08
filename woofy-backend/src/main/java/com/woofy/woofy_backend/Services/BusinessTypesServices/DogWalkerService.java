package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogWalkerDTOs.CreateDogWalkerRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogWalkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// DogWalkerService.java
@Service
public class DogWalkerService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private DogWalkerRepository dogWalkerRepository;

    public DogWalkerEntity createDogWalker(CreateDogWalkerRequest request, Integer businessId) {
        DogWalkerEntity dogWalkerEntity = new DogWalkerEntity();
        dogWalkerEntity.setAppointmentLengthInMinutes(Integer.parseInt(request.getAppointmentLengthInMinutes()));
        businessTypeService.create(request, businessId, dogWalkerEntity);
        return dogWalkerRepository.save(dogWalkerEntity);
    }

    public void deleteDogWalker(Integer id) {
        dogWalkerRepository.deleteById(id);
    }
}