package com.woofy.woofy_backend.DTOs.AppointmentDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class GetBoardingScheduleRequest {
    private Integer BusinessId;
    private LocalDate date;
}
