package com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories;

import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DayCareScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface DayCareScheduleRepository extends JpaRepository<DayCareScheduleEntity, LocalDate> {
    Optional<DayCareScheduleEntity> findByDate(LocalDate date);
}
