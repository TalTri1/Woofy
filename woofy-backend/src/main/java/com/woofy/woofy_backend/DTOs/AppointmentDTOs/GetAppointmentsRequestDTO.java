package com.woofy.woofy_backend.DTOs.AppointmentDTOs;

import com.woofy.woofy_backend.Models.Enums.BusinessTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAppointmentsRequestDTO {
    private String BusinessName;
    private BusinessTypeEnum BusinessType;
    private String address;
    private String city;
    private LocalDate date;
    private LocalTime startTime;
    private Integer profilePhotoID;
}
