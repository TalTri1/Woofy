package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities;

import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import jakarta.persistence.*;

import java.util.List;


@MappedSuperclass
public class BusinessTypeBaseEntity {

    @Enumerated(EnumType.STRING)
    @Column(name = "acceptable_dog_sizes", nullable = false)
    private List<DogSizeEnum> acceptableDogSizes;

/*    @OneToOne
    @JoinColumn(name = "business_id")
    private BusinessEntity business;*/
}
