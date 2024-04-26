package com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.Homestay;

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

}
