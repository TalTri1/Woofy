package com.woofy.woofy_backend.DTOs.AppointmentDTOs;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetBoardingAppointmentsRequest {
    private Integer BusinessId;
}
