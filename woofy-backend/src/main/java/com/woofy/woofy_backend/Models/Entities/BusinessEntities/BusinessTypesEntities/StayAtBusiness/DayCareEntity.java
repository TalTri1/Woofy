package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "day_care")
public class DayCareEntity extends StayAtBusinessBaseEntity{

    @Id
    @GeneratedValue
    @Column(name = "day_care_id", nullable = false)
    private Integer id;
}
