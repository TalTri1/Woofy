package com.woofy.woofy_backend.Services;


import com.woofy.woofy_backend.DTOs.AuthenticationDTOs.ChangePasswordRequest;
import com.woofy.woofy_backend.DTOs.UserDTOs.UpdateUserRequest;
import com.woofy.woofy_backend.DTOs.UserDTOs.UserSummaryDTO;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserEntity updateUser(Integer id, UpdateUserRequest request) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("user not found"));

        // Only update the field if a value is provided
        if (request.getEmail() != null && userRepository.findByEmail(request.getEmail()).isEmpty()) {
            userEntity.setEmail(request.getEmail());
        }
        if (request.getPhoneNumber() != null && userRepository.findByPhoneNumber(request.getPhoneNumber()).isEmpty()) {
            userEntity.setPhoneNumber(request.getPhoneNumber());
        }
        if (request.getAddress() != null) {
            userEntity.setAddress(request.getAddress());
        }
        if (request.getCity() != null) {
            userEntity.setCity(request.getCity());
        }
        if (request.getZipCode() != null) {
            userEntity.setZipCode(request.getZipCode());
        }
        if (request.getProfilePhotoId() != null) {
            userEntity.setProfilePhotoID(request.getProfilePhotoId());
        }

        return userRepository.save(userEntity);
    }

    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (UserEntity) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        userRepository.save(user);
    }

    public List<UserSummaryDTO> getAllUsersSummary() {
        return userRepository.findAll().stream()
                .map(user -> new UserSummaryDTO(
                        user.getFirstName(),
                        user.getLastName(),
                        user.getPhoneNumber(),
                        user.getAddress(),
                        user.getCity(),
                        user.getRole()))
                .collect(Collectors.toList());
    }

}