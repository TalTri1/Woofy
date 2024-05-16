package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Models.Enums.HomeConditionsEnum;
import com.woofy.woofy_backend.Models.Enums.PetsInHomeEnum;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@MappedSuperclass
public class StayAtBusinessBaseEntity extends BusinessTypeBaseEntity {
    @ElementCollection
    @Column(name = "home_conditions")
    private List<HomeConditionsEnum> homeConditions;

    @ElementCollection
    @Column(name = "pets_in_home")
    private List<PetsInHomeEnum> petsInHome;

}
