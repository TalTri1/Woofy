package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities;

import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Data
@MappedSuperclass
public class BusinessTypeBaseEntity {

    @Enumerated(EnumType.STRING)
    @Column(name = "acceptable_dog_sizes", nullable = false)
    private List<DogSizeEnum> acceptableDogSizes;

}
