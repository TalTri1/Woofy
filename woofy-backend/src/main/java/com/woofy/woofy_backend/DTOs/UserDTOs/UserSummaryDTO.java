package com.woofy.woofy_backend.DTOs.UserDTOs;

import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSummaryDTO {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String city;
    private RoleEnum role;
}
