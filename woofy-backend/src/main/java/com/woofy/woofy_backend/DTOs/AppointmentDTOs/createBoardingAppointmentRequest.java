package com.woofy.woofy_backend.DTOs.AppointmentDTOs;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class createBoardingAppointmentRequest {

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Integer businessId;
}
