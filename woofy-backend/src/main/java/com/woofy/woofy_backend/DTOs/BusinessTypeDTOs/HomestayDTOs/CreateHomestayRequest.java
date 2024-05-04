package com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.HomestayDTOs;

import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import com.woofy.woofy_backend.Models.Enums.HomeConditionsEnum;
import com.woofy.woofy_backend.Models.Enums.PetsInHomeEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateHomestayRequest {
    private List<HomeConditionsEnum> homeConditions;
    private List<PetsInHomeEnum> petsInHome;
    private List<DogSizeEnum> acceptableDogSizes;
}
