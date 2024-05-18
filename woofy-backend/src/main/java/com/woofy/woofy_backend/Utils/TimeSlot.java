package com.woofy.woofy_backend.Utils;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalTime;

@AllArgsConstructor
@Data
public class TimeSlot {
    private LocalTime startTime;
    private LocalTime endTime;

}
