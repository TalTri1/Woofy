package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.DTOs.AuthenticationDTOs.ChangePasswordRequest;
import com.woofy.woofy_backend.DTOs.UserDTOs.UpdateUserRequest;
import com.woofy.woofy_backend.DTOs.UserDTOs.UserSummaryDTO;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.UserRepository;
import com.woofy.woofy_backend.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;
    @Autowired
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<UserEntity> getUser(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        return ResponseEntity.ok(user);
    }
    @PatchMapping("/update")
    public ResponseEntity<UserEntity> updateUser(@RequestBody UpdateUserRequest request, Principal connectedUser) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        UserEntity updatedUser = service.updateUser(user.getId(), request);
        return ResponseEntity.ok(updatedUser);
    }
    @PatchMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request, Principal connectedUser) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

    // get all
    @GetMapping("/all")
    public ResponseEntity<List<UserSummaryDTO>> getAllUsers() {
        List<UserSummaryDTO> users = service.getAllUsersSummary();
        return ResponseEntity.ok(users);
    }

}

