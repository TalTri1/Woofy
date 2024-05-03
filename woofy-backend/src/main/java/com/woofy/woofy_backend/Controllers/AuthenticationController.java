package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTOs.AuthenticationRequest;
import com.woofy.woofy_backend.DTOs.EmailValidationRequest;
import com.woofy.woofy_backend.DTOs.BusinessDTOs.RegisterBusinessRequest;
import com.woofy.woofy_backend.DTOs.UserDTOs.RegisterCustomerRequest;
import com.woofy.woofy_backend.Services.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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

    @PostMapping("/register-business")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterBusinessRequest request, BindingResult result) {
        return service.registerBusiness(request, result);
    }

    @PostMapping("/register-customer")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterCustomerRequest request, BindingResult result) {
        return service.registerCustomer(request, result);
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