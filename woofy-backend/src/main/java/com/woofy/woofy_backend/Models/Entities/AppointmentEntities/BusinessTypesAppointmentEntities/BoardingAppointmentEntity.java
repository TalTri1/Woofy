package com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities;


import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BaseAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "boarding_appointments")
public class BoardingAppointmentEntity extends BaseAppointmentEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boarding_appointment_id", nullable = false)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "boarding_id")
    private BoardingEntity boardingEntity;
}
