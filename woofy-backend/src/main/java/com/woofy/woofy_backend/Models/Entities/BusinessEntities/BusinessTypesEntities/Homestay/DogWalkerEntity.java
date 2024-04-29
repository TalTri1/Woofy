package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dog_walker")
public class DogWalkerEntity extends HomestayBaseEntity {

    @Id
    @GeneratedValue
    @Column(name = "dog_walker_id", nullable = false)
    private Integer id;

    @OneToOne
    @JsonManagedReference
    @JoinColumn(name = "business_id", nullable = false)
    private BusinessEntity business;

}