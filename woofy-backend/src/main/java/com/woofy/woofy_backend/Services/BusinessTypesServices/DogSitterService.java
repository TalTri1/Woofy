package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogSitterDTOs.CreateOrUpdateDogSitterRequest;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogSitterRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DogSitterService {

    @Autowired
    private BusinessTypeService businessTypeService;

    @Autowired
    private DogSitterRepository dogSitterRepository;

    public DogSitterEntity createDogSitter(CreateOrUpdateDogSitterRequest request, Integer businessId) {
        DogSitterEntity dogSitterEntity = new DogSitterEntity();
        dogSitterEntity.setAppointmentLengthInMinutes(Integer.parseInt(request.getAppointmentLengthInMinutes()));
        businessTypeService.create(request, businessId, dogSitterEntity);
        return dogSitterRepository.save(dogSitterEntity);
    }

    public void deleteDogSitter(Integer id) {
        dogSitterRepository.deleteById(id);
    }

    public DogSitterEntity editDogSitter(CreateOrUpdateDogSitterRequest request, Integer id) {
        Optional<DogSitterEntity> optionalDogSitter = dogSitterRepository.findById(id);
        if (optionalDogSitter.isPresent()) {
            DogSitterEntity dogSitterEntity = optionalDogSitter.get();
            if (request.getAppointmentLengthInMinutes() != null) {
                dogSitterEntity.setAppointmentLengthInMinutes(Integer.parseInt(request.getAppointmentLengthInMinutes()));
            }
            return dogSitterRepository.save(dogSitterEntity);
        } else {
            throw new EntityNotFoundException("DogSitterEntity with ID " + id + " not found.");
        }
    }
}