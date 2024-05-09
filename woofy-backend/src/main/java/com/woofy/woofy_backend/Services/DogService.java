package com.woofy.woofy_backend.Services;

import com.woofy.woofy_backend.DTOs.DogDTOs.DogRegisterRequest;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.DogEntity;
import com.woofy.woofy_backend.Models.Entities.ImageEntity;
import com.woofy.woofy_backend.Repositories.CustomerRepository;
import com.woofy.woofy_backend.Repositories.DogRepository;
import com.woofy.woofy_backend.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DogService {
    private final DogRepository dogRepository;
    private final CustomerRepository customerRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    public DogService(DogRepository dogRepository, CustomerRepository customerRepository) {
        this.dogRepository = dogRepository;
        this.customerRepository = customerRepository;
    }

    public DogEntity createDog(DogRegisterRequest dogDTO, Long customerId) {
        CustomerEntity customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        DogEntity dog = new DogEntity();
        dog.setDogName(dogDTO.getDogName());
        dog.setDog_breed(dogDTO.getDogBreed());
        dog.setAge(dogDTO.getAge());
        dog.setSize(dogDTO.getSize());
        dog.setTrainingLevel(dogDTO.getTrainingLevel());
        dog.setAbout(dogDTO.getAbout());
        dog.setSpecialRequirements(dogDTO.getSpecialRequirements());
        dog.setImages(null);
        dog.setOwner(customer);

        DogEntity savedDog = dogRepository.save(dog);

        // Set the saved dog to the customer and save the customer
        customer.setDog(savedDog);
        customerRepository.save(customer);

        return savedDog;
    }

    public void deleteDog(Long id) {
        DogEntity dog = dogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Dog not found"));
        CustomerEntity customer = dog.getOwner();
        customer.setDog(null);
        customerRepository.save(customer);
        dogRepository.deleteById(id);
    }

    public void updateDogImages(Long dogId, List<Long> imageIds) {
        DogEntity dog = dogRepository.findById(dogId).orElseThrow(() -> new RuntimeException("Dog not found"));
        List<ImageEntity> images = imageRepository.findAllById(imageIds);

        List<Long> imageIdList = new ArrayList<>();
        for (ImageEntity image : images) {
            imageIdList.add(image.getImageID());
        }

        dog.setImages(imageIdList);
        dogRepository.save(dog);
    }

}