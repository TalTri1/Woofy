package com.woofy.woofy_backend.DTO;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EmailValidationRequest {
    @Email(message = "Email should be valid")
    private String email;
}
