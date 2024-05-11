package com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardingAppointmentRepository extends JpaRepository<BoardingAppointmentEntity, Integer> {
}