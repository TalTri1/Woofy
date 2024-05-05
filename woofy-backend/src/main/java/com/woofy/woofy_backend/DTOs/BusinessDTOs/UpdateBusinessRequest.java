package com.woofy.woofy_backend.DTOs.BusinessDTOs;

import com.woofy.woofy_backend.DTOs.UserDTOs.UpdateUserRequest;
import com.woofy.woofy_backend.Models.Enums.BusinessTypeEnum;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.util.List;

@Data
public class UpdateBusinessRequest extends UpdateUserRequest {

    @Column(name = "business_name")
    private String businessName;

    @Column(name = "about", length = 2000)
    private String about;

    @Enumerated(EnumType.STRING)
    @Column(name = "business_types", nullable = false)
    private List<BusinessTypeEnum> businessTypes;

    @Column(name = "website")
    private String website;

    @Column(name = "social_media")
    private String socialMedia;
}
