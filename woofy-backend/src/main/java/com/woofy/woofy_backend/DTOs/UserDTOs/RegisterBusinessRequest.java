package com.woofy.woofy_backend.DTOs.UserDTOs;

import com.woofy.woofy_backend.Models.Enums.BusinessTypeEnum;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterBusinessRequest extends BaseRegisterRequest {

    @Column(name = "business_name")
    private String businessName;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "zip_code", nullable = false)
    private String zipCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "business_types", nullable = false)
    private List<BusinessTypeEnum> businessTypes;

    @Column(name = "about", length = 2000)
    private String about;


}
