package com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogSitterAppointmentRepository extends JpaRepository<DogSitterAppointmentEntity, Integer> {
}