package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "boarding")
public class BoardingEntity extends StayAtBusinessBaseEntity{
    @Id
    @GeneratedValue
    @Column(name = "boarding_id", nullable = false)
    private Integer id;
}
