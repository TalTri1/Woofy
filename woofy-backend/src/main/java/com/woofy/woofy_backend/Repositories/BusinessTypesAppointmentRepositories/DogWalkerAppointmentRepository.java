package com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogWalkerAppointmentRepository extends JpaRepository<DogWalkerAppointmentEntity, Integer> {
}