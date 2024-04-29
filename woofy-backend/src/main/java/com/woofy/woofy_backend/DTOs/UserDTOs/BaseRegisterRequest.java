package com.woofy.woofy_backend.DTOs.UserDTOs;

import com.woofy.woofy_backend.Models.Entities.PictureEntity;
import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Enumerated;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public abstract class BaseRegisterRequest {

//    @OneToOne()
//    @NotEmpty(message = "Profile photo is required")
//    private PictureEntity profilePhoto;

    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email is required")
    private String email;

    @Size(min = 8, message = "Password must be at least 8 characters long")
    @NotEmpty(message = "Password is required")
    private String password;

    @NotEmpty(message = "First name is required")
    private String firstName;

    @NotEmpty(message = "Last name is required")
    private String lastName;

    @Pattern(regexp="(^$|[0-9]{10})", message="Phone number must be exactly 10 digits long")
    @NotEmpty(message = "Phone number is required")
    private String phoneNumber;

}