package com.woofy.woofy_backend.DTOs.BusinessDTOs;

import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BusinessUserSummaryDTO {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String city;
    private RoleEnum role;
    private String about;
    private String businessName;
    private String businessType;
    private String socialMedia;
    private String website;
    private List<DogSizeEnum> acceptableDogSizes;
    private Integer dogCapacity;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private int price;
    private List<WorkingDaysEnum> workingDays;
    private double lat;
    private double lon;
}
