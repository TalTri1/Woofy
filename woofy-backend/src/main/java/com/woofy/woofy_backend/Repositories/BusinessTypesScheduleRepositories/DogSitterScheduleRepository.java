package com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories;

import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DogSitterScheduleEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DogWalkerScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

public interface DogSitterScheduleRepository extends JpaRepository<DogSitterScheduleEntity, Integer> {
    Optional<DogSitterScheduleEntity> findByDateAndStartTimeAndEndTime(LocalDate date, LocalTime startTime, LocalTime endTime);

}