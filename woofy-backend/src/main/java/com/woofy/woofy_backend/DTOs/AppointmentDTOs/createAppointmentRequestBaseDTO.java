package com.woofy.woofy_backend.DTOs.AppointmentDTOs;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class createAppointmentRequestBaseDTO {

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Integer businessId;
}
