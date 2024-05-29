package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateBoardingAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.GetBoardingAppointmentsRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.GetBoardingScheduleRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.BoardingAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.BoardingScheduleRepository;
import com.woofy.woofy_backend.Services.BusinessTypesAppointmentsServices.BoardingAppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.DayOfWeek;
import java.util.List;

@RestController
public class BoardingAppointmentController extends BaseAppointmentController{

    @Autowired
    private BoardingScheduleRepository boardingScheduleRepository;

    @Autowired
    private BoardingAppointmentRepository boardingAppointmentRepository;

    @Autowired
    private BoardingAppointmentsService boardingAppointmentsService;

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

    @GetMapping("/get-boarding-appointments/by-business-id")
    public ResponseEntity<List<BoardingAppointmentEntity>> getAppointmentsByBoardingEntityId(@RequestBody GetBoardingAppointmentsRequest getAppointmentsRequest) {
        List<BoardingAppointmentEntity> appointments = boardingAppointmentsService.getAppointmentsByBusinessId(getAppointmentsRequest.getBusinessId());
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/get-boarding-appointments/by-user-id")
    public ResponseEntity<List<BoardingAppointmentEntity>> getAppointmentsByUserId(@RequestBody GetBoardingAppointmentsRequest getAppointmentsRequest, Principal principal) {
        CustomerEntity customer = (CustomerEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Integer dogId = customer.getDog().getId();
        List<BoardingAppointmentEntity> appointments = boardingAppointmentsService.getAppointmentsByDogId(dogId);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/get-boarding-schedule")
    public ResponseEntity<BoardingScheduleEntity> getScheduleByBusinessIdAndDate(@RequestBody GetBoardingScheduleRequest getScheduleRequest) {
        BoardingScheduleEntity schedule = boardingAppointmentsService.getScheduleByBusinessIdAndDate(getScheduleRequest.getBusinessId(), getScheduleRequest.getDate()).orElse(null);
        return ResponseEntity.ok(schedule);
    }
}
