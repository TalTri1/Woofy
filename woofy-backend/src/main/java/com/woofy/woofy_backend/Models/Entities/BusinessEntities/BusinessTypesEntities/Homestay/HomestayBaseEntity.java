package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Models.Enums.HomeConditionsEnum;
import com.woofy.woofy_backend.Models.Enums.PetsInHomeEnum;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@MappedSuperclass
public class HomestayBaseEntity extends BusinessTypeBaseEntity {

}
