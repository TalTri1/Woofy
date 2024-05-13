package com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories;

import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface BoardingScheduleRepository extends JpaRepository<BoardingScheduleEntity, LocalDate> {
}