package com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BaseScheduleEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "boarding_schedule")
public class BoardingScheduleEntity extends BaseScheduleEntity {

    @Id
    @Column(name = "date", nullable = false)
    private LocalDate date;

    @JsonBackReference
    @OneToOne(mappedBy = "boardingScheduleEntity")
    private BoardingEntity boardingEntity;

    @Column(name = "current_dog_capacity", nullable = false)
    private Integer currentDogCapacity;
}
