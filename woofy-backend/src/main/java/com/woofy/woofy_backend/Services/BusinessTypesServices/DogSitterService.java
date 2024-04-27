package com.woofy.woofy_backend.Services.BusinessTypesServices;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogSitterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogSitterService {

    private final DogSitterRepository dogSitterRepository;

    @Autowired
    public DogSitterService(DogSitterRepository dogSitterRepository) {
        this.dogSitterRepository = dogSitterRepository;
    }

    public DogSitterEntity createDogSitter(DogSitterEntity dogSitter) {
        return dogSitterRepository.save(dogSitter);
    }

    public void deleteDogSitter(Integer id) {
        dogSitterRepository.deleteById(id);
    }
}