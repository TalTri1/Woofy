package com.woofy.woofy_backend.DTOs.BusinessDTOs;

import com.woofy.woofy_backend.DTOs.UserDTOs.UpdateUserRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class UpdateBusinessRequest extends UpdateUserRequest {
    private String businessName;
}
