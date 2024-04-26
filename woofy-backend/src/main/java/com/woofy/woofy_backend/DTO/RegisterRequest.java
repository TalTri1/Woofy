package com.woofy.woofy_backend.DTO;

import com.woofy.woofy_backend.Models.Enums.RoleEnum;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    @Email(message = "Email should be valid")
    private String email;
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
    @Pattern(regexp="(^$|[0-9]{10})", message="Phone number must be exactly 10 digits long")
    private String phoneNumber;
    private RoleEnum role;
}