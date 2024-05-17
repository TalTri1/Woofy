package com.woofy.woofy_backend.DTOs.BusinessDTOs;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Models.Enums.BusinessTypeEnum;
import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
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
    private int id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String city;
    private RoleEnum role;
    private String about;
    private String businessName;
    private String socialMedia;
    private String website;
    private List<DogSizeEnum> acceptableDogSizes;
    private List<BusinessTypeEnum> businessTypes;
    private DogSitterEntity dogSitterEntity;
    private DogWalkerEntity dogWalkerEntity;
    private BoardingEntity boardingEntity;
    private DayCareEntity dayCareEntity;
    private int dogCapacity;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private int price;
    private List<WorkingDaysEnum> workingDays;
    private double lat;
    private double lon;
}
