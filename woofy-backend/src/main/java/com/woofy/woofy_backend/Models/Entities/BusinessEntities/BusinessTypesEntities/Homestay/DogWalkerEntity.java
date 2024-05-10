package com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dog_walker_appointment_id", referencedColumnName = "dog_walker_appointmet_id")
    private DogWalkerAppointmentEntity dogWalkerAppointmentEntity;

}