package com.woofy.woofy_backend.Controllers;


import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DayCareAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.BoardingAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DayCareAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogSitterAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogWalkerAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.BoardingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;

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

    @Autowired
    private BoardingScheduleRepository boardingScheduleRepository;

    @PostMapping("/create-boarding-appointment")
    public ResponseEntity<String> createBoardingAppointment(@RequestBody BoardingAppointmentEntity newAppointment) {

        // TODO add principal and DTO
        DayOfWeek dayOfWeek = newAppointment.getDate().getDayOfWeek();
        WorkingDaysEnum workingDay = WorkingDaysEnum.valueOf(dayOfWeek.toString());

        if (!newAppointment.getBoardingEntity().getWorkingDays().contains(workingDay)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Boarding is not available on this day");
        }

        if (newAppointment.getDate().isBefore(newAppointment.getBoardingEntity().getStartDate()) ||
                newAppointment.getDate().isAfter(newAppointment.getBoardingEntity().getEndDate())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Appointment date is not within the available dates of the boarding");
        }

        BoardingScheduleEntity existingSchedule = boardingScheduleRepository.findById(newAppointment.getDate()).orElse(null);

        if (existingSchedule != null) {

            if (newAppointment.getBoardingEntity().getDogCapacity() - existingSchedule.getCurrentDogCapacity() == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No more room for dogs");
            }

            existingSchedule.setCurrentDogCapacity(existingSchedule.getCurrentDogCapacity() + 1);
            boardingScheduleRepository.save(existingSchedule);
        }

        else {
            BoardingScheduleEntity newSchedule = new BoardingScheduleEntity();
            newSchedule.setDate(newAppointment.getDate());
            newSchedule.setBoardingEntity(newAppointment.getBoardingEntity());
            newSchedule.setCurrentDogCapacity(1);
            boardingScheduleRepository.save(newSchedule);
        }

        boardingAppointmentRepository.save(newAppointment);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/create-dog-walker-appointment")
    public ResponseEntity<String> createDogWalkerAppointment(@RequestBody DogWalkerAppointmentEntity newAppointment) {
        if (newAppointment.getDogWalkerEntity().getWorkingDays().contains(newAppointment.getDate().getDayOfWeek().getValue())) {
            // Your code here
        }

        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dog walker is not available on this day");
        }
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/create-day-care-appointment")
    public DayCareAppointmentEntity createDayCareAppointment(@RequestBody DayCareAppointmentEntity newAppointment) {
        return dayCreAppointmentRepository.save(newAppointment);
    }

    @PostMapping("/create-dog-sitter-appointment")
    public DogSitterAppointmentEntity createDogSitterAppointment(@RequestBody DogSitterAppointmentEntity newAppointment) {
        return dogSitterAppointmentRepository.save(newAppointment);
    }
}