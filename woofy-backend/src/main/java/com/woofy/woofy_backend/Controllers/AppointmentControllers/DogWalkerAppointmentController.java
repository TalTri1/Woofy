package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateDogWalkerAppointmentRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DogWalkerScheduleEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogWalkerAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.DogWalkerScheduleRepository;
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
@RequestMapping("/api/v1/appointment/dog-walker")
public class DogWalkerAppointmentController extends BaseAppointmentController{

    @Autowired
    private DogWalkerScheduleRepository dogWalkerScheduleRepository;

    @Autowired
    private DogWalkerAppointmentRepository dogWalkerAppointmentRepository;

    @PostMapping("/create-appointment")
    public ResponseEntity<String> createDogWalkerAppointment(@RequestBody CreateDogWalkerAppointmentRequest newAppointmentRequest, Principal principal) {

        CustomerEntity customer = (CustomerEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.getReferenceById(newAppointmentRequest.getBusinessId());
        DogWalkerEntity dogWalker = business.getDogWalkerEntity();
        LocalDate appointmentDate = newAppointmentRequest.getDate();
        LocalTime appointmentStartTime = newAppointmentRequest.getStartTime();
        LocalTime appointmentEndTime = newAppointmentRequest.getEndTime();
        LocalTime dogWalkerStartTime = dogWalker.getStartTime();
        LocalTime dogWalkerEndTime = dogWalker.getEndTime();
        int appointmentLength = dogWalker.getAppointmentLengthInMinutes();

        if (appointmentEndTime.isBefore(appointmentStartTime)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("End time of the dog walker appointment cannot be before start time");
        }

        List<TimeSlot> timeSlots;
        timeSlots = TimeSlotUtil.generateSlotsByMinutes(dogWalkerStartTime, dogWalkerEndTime, appointmentLength);
        TimeSlot requestedSlot = new TimeSlot(appointmentStartTime, appointmentEndTime);

        if (!timeSlots.contains(requestedSlot)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid time slot");
        }

        DogWalkerScheduleEntity existingSchedule = dogWalkerScheduleRepository.findByDateAndStartTimeAndEndTime(appointmentDate, appointmentStartTime, appointmentEndTime).orElse(null);

        if (existingSchedule != null) {
            existingSchedule.setCurrentDogCapacity(existingSchedule.getCurrentDogCapacity() + 1);
            dogWalkerScheduleRepository.save(existingSchedule);
        } else {
            DogWalkerScheduleEntity newSchedule = new DogWalkerScheduleEntity();
            newSchedule.setDate(appointmentDate);
            newSchedule.setStartTime(appointmentStartTime);
            newSchedule.setEndTime(appointmentEndTime);
            newSchedule.setDogWalkerEntity(dogWalker);
            newSchedule.setCurrentDogCapacity(1);
            dogWalkerScheduleRepository.save(newSchedule);
        }

        DogWalkerAppointmentEntity dogWalkerAppointmentEntity = new DogWalkerAppointmentEntity();
        dogWalkerAppointmentEntity.setDate(appointmentDate);
        dogWalkerAppointmentEntity.setStartTime(appointmentStartTime);
        dogWalkerAppointmentEntity.setEndTime(appointmentEndTime);
        dogWalkerAppointmentEntity.setDogId(customer.getDog().getId());

        // Add the new appointment to the list of appointments in the DogWalkerEntity
        List<DogWalkerAppointmentEntity> dogWalkerAppointments = dogWalker.getDogWalkerAppointmentEntities();
        if (dogWalkerAppointments == null) {
            dogWalkerAppointments = new ArrayList<>();
        }
        dogWalkerAppointments.add(dogWalkerAppointmentEntity);
        dogWalker.setDogWalkerAppointmentEntities(dogWalkerAppointments);

        dogWalkerAppointmentRepository.save(dogWalkerAppointmentEntity);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
