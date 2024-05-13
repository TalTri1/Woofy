package com.woofy.woofy_backend.Models.Entities.ScheduleEntities;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class BaseScheduleEntity {

    @Column(nullable = false, name = "number_of_dogs")
    private Integer numberOfDogs;
}
