package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dog_sitter")
public class DogSitterEntity extends HomestayBaseEntity{

    @Id
    @GeneratedValue
    @Column(name = "dog_sitter_id", nullable = false)
    private Integer id;
}
