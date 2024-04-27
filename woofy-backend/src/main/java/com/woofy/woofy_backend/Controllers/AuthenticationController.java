package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTO.AuthenticationRequest;
import com.woofy.woofy_backend.DTO.AuthenticationResponse;
import com.woofy.woofy_backend.DTO.EmailValidationRequest;
import com.woofy.woofy_backend.DTO.RegisterRequest;
import com.woofy.woofy_backend.Services.AuthenticationService;
import com.woofy.woofy_backend.Services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/check-valid-email")
    public ResponseEntity<?> check_valid_email(@Valid @RequestBody EmailValidationRequest request, BindingResult result) {
        return service.check_valid_email(request, result);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request, BindingResult result) {
        return service.register(request, result);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        return service.authenticate(request);
    }

    @PostMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        service.refreshToken(request, response);
    }


}