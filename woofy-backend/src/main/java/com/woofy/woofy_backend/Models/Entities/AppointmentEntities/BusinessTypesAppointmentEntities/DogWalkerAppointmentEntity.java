package com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BaseAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dog_walker_appointments")
public class DogWalkerAppointmentEntity extends BaseAppointmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dog_walker_appointmet_id" , nullable = false)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "dog_walker_id")
    private DogWalkerEntity dogWalkerEntity;


}
