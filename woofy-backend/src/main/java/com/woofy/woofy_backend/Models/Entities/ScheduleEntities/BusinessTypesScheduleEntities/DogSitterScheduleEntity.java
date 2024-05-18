package com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dog_sitter_schedule")
public class DogSitterScheduleEntity extends BaseTimedScheduleEntity {

    @JsonBackReference
    @OneToOne(mappedBy = "dogSitterScheduleEntity")
    private DogSitterEntity dogSitterEntity;
}
