package com.woofy.woofy_backend.Controllers;


import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DayCareAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.BoardingAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DayCareAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogSitterAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogWalkerAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/appointment")
public class AppointmentController {

    @Autowired
    private DogWalkerAppointmentRepository dogWalkerAppointmentRepository;

    @Autowired
    private DayCareAppointmentRepository dayCreAppointmentRepository;

    @Autowired
    private BoardingAppointmentRepository boardingAppointmentRepository;

    @Autowired
    private DogSitterAppointmentRepository dogSitterAppointmentRepository;


    @PostMapping("/create-dog-walker-appointment")
    public DogWalkerAppointmentEntity createDogWalkerAppointment(@RequestBody DogWalkerAppointmentEntity newAppointment) {
        return dogWalkerAppointmentRepository.save(newAppointment);
    }

    @PostMapping("/create-day-care-appointment")
    public DayCareAppointmentEntity createDayCareAppointment(@RequestBody DayCareAppointmentEntity newAppointment) {
        return dayCreAppointmentRepository.save(newAppointment);
    }

    @PostMapping("/create-boarding-appointment")
    public BoardingAppointmentEntity createBoardingAppointment(@RequestBody BoardingAppointmentEntity newAppointment) {
        return boardingAppointmentRepository.save(newAppointment);
    }

    @PostMapping("/create-dog-sitter-appointment")
    public DogSitterAppointmentEntity createDogSitterAppointment(@RequestBody DogSitterAppointmentEntity newAppointment) {
        return dogSitterAppointmentRepository.save(newAppointment);
    }
}