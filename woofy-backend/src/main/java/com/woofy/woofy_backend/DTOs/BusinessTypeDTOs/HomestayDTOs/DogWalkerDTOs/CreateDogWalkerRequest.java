package com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs.DogWalkerDTOs;

import com.woofy.woofy_backend.Models.Enums.HomeConditionsEnum;
import com.woofy.woofy_backend.Models.Enums.PetsInHomeEnum;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateDogWalkerRequest {
    private List<HomeConditionsEnum> homeConditions;
    private List<PetsInHomeEnum> petsInHome;
}