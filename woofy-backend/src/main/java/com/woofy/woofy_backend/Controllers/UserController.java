package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTO.AuthenticationRequest;
import com.woofy.woofy_backend.DTO.AuthenticationResponse;
import com.woofy.woofy_backend.DTO.ChangePasswordRequest;
import com.woofy.woofy_backend.DTO.RegisterRequest;
import com.woofy.woofy_backend.Services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PatchMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request, Principal connectedUser) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }


}

