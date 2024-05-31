package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateDogSitterAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.GetScheduleAndAppointmentDetailsRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DogSitterScheduleEntity;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogSitterAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.DogSitterRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.DogSitterScheduleRepository;
import com.woofy.woofy_backend.Utils.TimeSlot;
import com.woofy.woofy_backend.Utils.TimeSlotUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/appointment/dog-sitter")
public class DogSitterAppointmentController extends BaseAppointmentController{

    @Autowired
    private DogSitterScheduleRepository dogSitterScheduleRepository;

    @Autowired
    private DogSitterAppointmentRepository dogSitterAppointmentRepository;

    @Autowired
    private DogSitterRepository dogSitterEntityRepository;


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

            // Add the new schedule to the list of schedules in the DogSitterEntity
            List<DogSitterScheduleEntity> dogSitterSchedules = dogSitter.getDogSitterScheduleEntities();
            if (dogSitterSchedules == null) {
                dogSitterSchedules = new ArrayList<>();
            }
            dogSitterSchedules.add(newSchedule);
            dogSitter.setDogSitterScheduleEntities(dogSitterSchedules);
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

    @GetMapping("/available-hours")
    public ResponseEntity<List<TimeSlot>> getAvailableHours(@RequestBody GetScheduleAndAppointmentDetailsRequest request) {
        Optional<List<DogSitterScheduleEntity>> optionalSchedules = dogSitterScheduleRepository.findAllByDate(request.getDate());
        return ResponseEntity.ok(TimeSlotUtil.createTimeSlotsFromSchedules(optionalSchedules));
    }

    @GetMapping("/available-hours-by-business")
    public ResponseEntity<List<TimeSlot>> getAvailableHoursByBusiness(@RequestBody GetScheduleAndAppointmentDetailsRequest request) {
        Optional<List<DogSitterScheduleEntity>> optionalSchedules = dogSitterScheduleRepository.findAllByDogSitterEntity_Business_IdAndDate(request.getBusinessId(), request.getDate());
        List<TimeSlot> takenTimeSlots = TimeSlotUtil.createTimeSlotsFromSchedules(optionalSchedules);

        // Get the total working hours of the dog sitter
        DogSitterEntity dogSitter = dogSitterEntityRepository.findByBusiness_Id(request.getBusinessId());
        List<TimeSlot> totalWorkingHours = TimeSlotUtil.generateSlotsByMinutes(dogSitter.getStartTime(), dogSitter.getEndTime(), dogSitter.getAppointmentLengthInMinutes());

        // Subtract the taken hours from the total working hours
        totalWorkingHours.removeAll(takenTimeSlots);

        return ResponseEntity.ok(totalWorkingHours);
    }
}