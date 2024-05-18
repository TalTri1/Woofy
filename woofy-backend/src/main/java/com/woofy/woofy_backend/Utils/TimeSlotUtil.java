package com.woofy.woofy_backend.Utils;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class TimeSlotUtil {
    public static List<TimeSlot> generateSlotsByMinutes(LocalTime startTime, LocalTime endTime, int appointmentLength) {
        List<TimeSlot> timeSlots = new ArrayList<>();
        LocalTime slotStart = startTime;

        while (slotStart.isBefore(endTime)) {
            LocalTime slotEnd = slotStart.plusMinutes(appointmentLength);
            if (slotEnd.isAfter(endTime)) {
                slotEnd = endTime;
            }
            timeSlots.add(new TimeSlot(slotStart, slotEnd));
            slotStart = slotEnd;
        }

        return timeSlots;
    }
}
