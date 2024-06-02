package com.woofy.woofy_backend.DTOs.AppointmentDTOs;

import jakarta.persistence.Column;
import lombok.*;

import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateBoardingAppointmentRequest extends CreateAppointmentRequestBaseDTO {

    @Column(nullable = false)
    private LocalDate startDate;
    private LocalDate endDate;
}
