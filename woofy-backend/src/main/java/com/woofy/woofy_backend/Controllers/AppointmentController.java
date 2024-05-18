package com.woofy.woofy_backend.Controllers;


import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateBoardingAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateDayCareAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateDogWalkerAppointmentRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DayCareAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogSitterAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DogWalkerAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DayCareScheduleEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DogWalkerScheduleEntity;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import com.woofy.woofy_backend.Repositories.BusinessRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.BoardingAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DayCareAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogSitterAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DogWalkerAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.BoardingScheduleRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.DayCareScheduleRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.DogWalkerScheduleRepository;
import com.woofy.woofy_backend.Utils.TimeSlot;
import com.woofy.woofy_backend.Utils.TimeSlotUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

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

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private DayCareScheduleRepository dayCareScheduleRepository;

    @Autowired
    private DayCareAppointmentRepository dayCareAppointmentRepository;

    @Autowired
    private DogWalkerScheduleRepository dogWalkerScheduleRepository;

    @PostMapping("/create-boarding-appointment")
    public ResponseEntity<String> createBoardingAppointment(@RequestBody CreateBoardingAppointmentRequest newAppointmentRequest, Principal principal) {

        CustomerEntity customer = (CustomerEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.getReferenceById(newAppointmentRequest.getBusinessId());
        BoardingEntity boarding = business.getBoardingEntity();
        DayOfWeek appointmentdayOfWeek = newAppointmentRequest.getDate().getDayOfWeek();

        if (!boarding.getWorkingDays().contains(WorkingDaysEnum.valueOf(appointmentdayOfWeek.name()))) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Boarding is not available on this day");
        }

        if (newAppointmentRequest.getDate().isBefore(boarding.getStartDate()) ||
                newAppointmentRequest.getDate().isAfter(boarding.getEndDate())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Appointment date is not within the available dates of the boarding");
        }

        BoardingScheduleEntity existingSchedule = boardingScheduleRepository.findByDate(newAppointmentRequest.getDate()).orElse(null);

        if (existingSchedule != null) {

            if (boarding.getDogCapacity() - existingSchedule.getCurrentDogCapacity() == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No more room for dogs");
            }

            existingSchedule.setCurrentDogCapacity(existingSchedule.getCurrentDogCapacity() + 1);
            boardingScheduleRepository.save(existingSchedule);
        }

        else {
            BoardingScheduleEntity newSchedule = new BoardingScheduleEntity();
            newSchedule.setDate(newAppointmentRequest.getDate());
            newSchedule.setBoardingEntity(boarding);
            newSchedule.setCurrentDogCapacity(1);
            boardingScheduleRepository.save(newSchedule);
        }

        BoardingAppointmentEntity boardingAppointmentEntity = new BoardingAppointmentEntity();
        boardingAppointmentEntity.setDate(newAppointmentRequest.getDate());
        boardingAppointmentEntity.setBoardingEntity(boarding);
        boardingAppointmentEntity.setDogId(customer.getDog().getId());
        boardingAppointmentRepository.save(boardingAppointmentEntity);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/create-dog-walker-appointment")
        public ResponseEntity<String> createDogWalkerAppointment(@RequestBody CreateDogWalkerAppointmentRequest newAppointmentRequest, Principal principal) {

        CustomerEntity customer = (CustomerEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.getReferenceById(newAppointmentRequest.getBusinessId());
        DogWalkerEntity dogWalker = business.getDogWalkerEntity();
        LocalDate appointmentDate = newAppointmentRequest.getDate();
        LocalTime appointmentStartTime = newAppointmentRequest.getStartTime();
        LocalTime appointmentEndTime = newAppointmentRequest.getEndTime();
        LocalTime dogWalkerStartTime = dogWalker.getStartTime();
        LocalTime dogWalkerEndTime = dogWalker.getEndTime();
        int appointmentLength = dogWalker.getAppointmentLength();

        if (appointmentEndTime.isBefore(appointmentStartTime)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("End time of the dog walker appointment cannot be before start time");
        }

        List<TimeSlot> timeSlots;
        timeSlots = TimeSlotUtil.generateHourlySlots(dogWalkerStartTime, dogWalkerEndTime, appointmentLength);
        TimeSlot requestedSlot = new TimeSlot(appointmentStartTime, appointmentEndTime);

        if (!timeSlots.contains(requestedSlot)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid time slot");
        }

        DogWalkerScheduleEntity existingSchedule = dogWalkerScheduleRepository.findByDateAndStartTimeAndEndTime(appointmentDate, appointmentStartTime, appointmentEndTime).orElse(null);

        if (existingSchedule != null) {
            if (dogWalker.getDogCapacity() - existingSchedule.getCurrentDogCapacity() == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No more room for dogs in this time slot");
            }
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
        dogWalkerAppointmentRepository.save(dogWalkerAppointmentEntity);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/create-day-care-appointment")
    public ResponseEntity<String> createDayCareAppointment(@RequestBody CreateDayCareAppointmentRequest newAppointmentRequest, Principal principal) {
        CustomerEntity customer = (CustomerEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        BusinessEntity business = businessRepository.getReferenceById(newAppointmentRequest.getBusinessId());
        DayCareEntity dayCare = business.getDayCareEntity();
        DayOfWeek appointmentdayOfWeek = newAppointmentRequest.getDate().getDayOfWeek();

        if (!dayCare.getWorkingDays().contains(WorkingDaysEnum.valueOf(appointmentdayOfWeek.name()))) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Day Care is not available on this day");
        }

        if (newAppointmentRequest.getDate().isBefore(dayCare.getStartDate()) ||
                newAppointmentRequest.getDate().isAfter(dayCare.getEndDate())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Appointment date is not within the available dates of the day care");
        }

        DayCareScheduleEntity existingSchedule = dayCareScheduleRepository.findByDate(newAppointmentRequest.getDate()).orElse(null);

        if (existingSchedule != null) {

            if (dayCare.getDogCapacity() - existingSchedule.getCurrentDogCapacity() == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No more room for dogs");
            }

            existingSchedule.setCurrentDogCapacity(existingSchedule.getCurrentDogCapacity() + 1);
            dayCareScheduleRepository.save(existingSchedule);
        }

        else {
            DayCareScheduleEntity newSchedule = new DayCareScheduleEntity();
            newSchedule.setDate(newAppointmentRequest.getDate());
            newSchedule.setDayCareEntity(dayCare);
            newSchedule.setCurrentDogCapacity(1);
            dayCareScheduleRepository.save(newSchedule);
        }

        DayCareAppointmentEntity dayCareAppointmentEntity = new DayCareAppointmentEntity();
        dayCareAppointmentEntity.setDate(newAppointmentRequest.getDate());
        dayCareAppointmentEntity.setDayCareEntity(dayCare);
        dayCareAppointmentEntity.setDogId(customer.getDog().getId());
        dayCareAppointmentRepository.save(dayCareAppointmentEntity);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/create-dog-sitter-appointment")
    public DogSitterAppointmentEntity createDogSitterAppointment(@RequestBody DogSitterAppointmentEntity newAppointment) {
        return dogSitterAppointmentRepository.save(newAppointment);
    }
}