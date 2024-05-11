package com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DayCareAppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayCareAppointmentRepository extends JpaRepository<DayCareAppointmentEntity, Integer> {
}