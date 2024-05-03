package com.woofy.woofy_backend.DTOs.BusinessTypeDTOs.StayAtBusinessDTOs;

import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CreateStayAtBusinessRequest {
    private List<DogSizeEnum> acceptableDogSizes;
}
