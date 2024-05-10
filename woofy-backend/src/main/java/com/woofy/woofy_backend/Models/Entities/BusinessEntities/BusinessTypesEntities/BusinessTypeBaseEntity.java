package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
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

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "business_id", nullable = false)
    private BusinessEntity business;

    @Column(name = "dog_capacity", nullable = false)
    private int dogCapacity;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "about", length = 2000)
    private String about;

}
