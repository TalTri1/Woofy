package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dog_sitter")
public class DogSitterEntity extends HomestayBaseEntity {

    @Id
    @GeneratedValue
    @Column(name = "dog_sitter_id", nullable = false)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dog_sitter_appointment_id", referencedColumnName = "dog_sitter_appointmet_id")
    private DogSitterAppointmentEntity dogSitterAppointmentEntity;

}