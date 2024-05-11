package com.woofy.woofy_backend.Controllers;


import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogWalkerAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/appointment")
public class AppointmentController {
    @Autowired
    private DogWalkerAppointmentRepository dogWalkerAppointmentRepository;

    @PostMapping("/create-dog-walker-appointment")
    public DogWalkerAppointmentEntity createDogWalkerAppointment(@RequestBody DogWalkerAppointmentEntity newAppointment) {
        return dogWalkerAppointmentRepository.save(newAppointment);
    }
}