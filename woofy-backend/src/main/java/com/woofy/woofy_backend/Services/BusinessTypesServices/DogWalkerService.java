package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogWalkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogWalkerService {

    private final DogWalkerRepository dogWalkerRepository;

    @Autowired
    public DogWalkerService(DogWalkerRepository dogWalkerRepository) {
        this.dogWalkerRepository = dogWalkerRepository;
    }

    public DogWalkerEntity createDogWalker(DogWalkerEntity dogWalker) {
        return dogWalkerRepository.save(dogWalker);
    }

    public void deleteDogWalker(Integer id) {
        dogWalkerRepository.deleteById(id);
    }
}