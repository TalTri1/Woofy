package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateDogSitterAppointmentRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DogSitterScheduleEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogSitterAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.DogSitterScheduleRepository;
import com.woofy.woofy_backend.Utils.TimeSlot;
import com.woofy.woofy_backend.Utils.TimeSlotUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/appointment/dog-sitter")
public class DogSitterAppointmentController extends BaseAppointmentController{

    @Autowired
    private DogSitterScheduleRepository dogSitterScheduleRepository;

    @Autowired
    private DogSitterAppointmentRepository dogSitterAppointmentRepository;


    @PostMapping("/create-appointment")
    public ResponseEntity<String> createDogSitterAppointment(@RequestBody CreateDogSitterAppointmentRequest newAppointmentRequest, Principal principal) {
        CustomerEntity customer = (CustomerEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.getReferenceById(newAppointmentRequest.getBusinessId());
        DogSitterEntity dogSitter = business.getDogSitterEntity();
        LocalDate appointmentDate = newAppointmentRequest.getDate();
        LocalTime appointmentStartTime = newAppointmentRequest.getStartTime();
        LocalTime appointmentEndTime = newAppointmentRequest.getEndTime();
        LocalTime dogSitterStartTime = dogSitter.getStartTime();
        LocalTime dogSitterEndTime = dogSitter.getEndTime();
        int appointmentLength = dogSitter.getAppointmentLengthInMinutes();

        if (appointmentEndTime.isBefore(appointmentStartTime)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("End time of the dog sitter appointment cannot be before start time");
        }

        List<TimeSlot> timeSlots;
        timeSlots = TimeSlotUtil.generateSlotsByMinutes(dogSitterStartTime, dogSitterEndTime, appointmentLength);
        TimeSlot requestedSlot = new TimeSlot(appointmentStartTime, appointmentEndTime);

        if (!timeSlots.contains(requestedSlot)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid time slot");
        }

        DogSitterScheduleEntity existingSchedule = dogSitterScheduleRepository.findByDateAndStartTimeAndEndTime(appointmentDate, appointmentStartTime, appointmentEndTime).orElse(null);

        if (existingSchedule != null) {
            existingSchedule.setCurrentDogCapacity(existingSchedule.getCurrentDogCapacity() + 1);
            dogSitterScheduleRepository.save(existingSchedule);
        } else {
            DogSitterScheduleEntity newSchedule = new DogSitterScheduleEntity();
            newSchedule.setDate(appointmentDate);
            newSchedule.setStartTime(appointmentStartTime);
            newSchedule.setEndTime(appointmentEndTime);
            newSchedule.setDogSitterEntity(dogSitter);
            newSchedule.setCurrentDogCapacity(1);
            dogSitterScheduleRepository.save(newSchedule);
        }

        DogSitterAppointmentEntity dogSitterAppointmentEntity = new DogSitterAppointmentEntity();
        dogSitterAppointmentEntity.setDate(appointmentDate);
        dogSitterAppointmentEntity.setStartTime(appointmentStartTime);
        dogSitterAppointmentEntity.setEndTime(appointmentEndTime);
        dogSitterAppointmentEntity.setDogId(customer.getDog().getId());

        // Add the new appointment to the list of appointments in the DogSitterEntity
        List<DogSitterAppointmentEntity> dogSitterAppointments = dogSitter.getDogSitterAppointmentEntities();
        if (dogSitterAppointments == null) {
            dogSitterAppointments = new ArrayList<>();
        }
        dogSitterAppointments.add(dogSitterAppointmentEntity);
        dogSitter.setDogSitterAppointmentEntities(dogSitterAppointments);


        dogSitterAppointmentRepository.save(dogSitterAppointmentEntity);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
