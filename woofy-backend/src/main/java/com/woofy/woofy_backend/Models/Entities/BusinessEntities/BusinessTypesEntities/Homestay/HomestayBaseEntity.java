package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Models.Enums.HomeConditionsEnum;
import com.woofy.woofy_backend.Models.Enums.PetsInHomeEnum;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@MappedSuperclass
public class HomestayBaseEntity extends BusinessTypeBaseEntity {

    @ElementCollection
    @Column(name = "home_conditions")
    private List<HomeConditionsEnum> homeConditions;

    @ElementCollection
    @Column(name = "pets_in_home")
    private List<PetsInHomeEnum> petsInHome;
}