package com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.Homestay;

import com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Models.Enums.HomeConditionsEnum;
import com.woofy.woofy_backend.Models.Enums.PetsInHomeEnum;
import jakarta.persistence.*;

import java.util.List;

@Inheritance
public class HomestayBaseEntity extends BusinessTypeBaseEntity {

    @Column(name = "home_conditions")
    private List<HomeConditionsEnum> homeConditions;

    @Column(name = "pets_in_home")
    private List<PetsInHomeEnum> petsInHome;
}
