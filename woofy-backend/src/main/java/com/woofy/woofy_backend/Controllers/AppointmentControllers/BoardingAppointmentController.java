package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateBoardingAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.GetBoardingScheduleRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
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
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/appointment/boarding")
public class BoardingAppointmentController extends BaseAppointmentController{

    @Autowired
    private BoardingScheduleRepository boardingScheduleRepository;

    @Autowired
    private BoardingAppointmentRepository boardingAppointmentRepository;

    @Autowired
    private BoardingAppointmentsService boardingAppointmentsService;

    @PostMapping("/create-appointment")
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
        boardingAppointmentEntity.setEndDate(newAppointmentRequest.getEndDate());
        boardingAppointmentEntity.setBoardingEntity(boarding);
        boardingAppointmentEntity.setDogId(customer.getDog().getId());


        // Add the new appointment to the list of appointments in the BoardingEntity
        List<BoardingAppointmentEntity> boardingAppointments = boarding.getBoardingAppointmentEntities();
        if (boardingAppointments == null) {
            boardingAppointments = new ArrayList<>();
        }
        boardingAppointments.add(boardingAppointmentEntity);
        boarding.setBoardingAppointmentEntities(boardingAppointments);

        boardingAppointmentRepository.save(boardingAppointmentEntity);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/get-appointments")
    public ResponseEntity<List<BoardingAppointmentEntity>> getAllBoardingAppointments(Principal principal) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        if (user instanceof CustomerEntity) {
            Integer dogId = ((CustomerEntity) user).getDog().getId();
            List<BoardingAppointmentEntity> appointments = boardingAppointmentRepository.findByDogId(dogId);
            return ResponseEntity.ok(appointments);
        }
        if (user instanceof BusinessEntity) {
            Integer businessId = user.getId();
            List<BoardingAppointmentEntity> appointments = boardingAppointmentRepository.findByBoardingEntity_Business_Id(businessId);
            return ResponseEntity.ok(appointments);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @GetMapping("/get-boarding-schedule")
    public ResponseEntity<BoardingScheduleEntity> getScheduleByBusinessIdAndDate(@RequestBody GetBoardingScheduleRequest getScheduleRequest) {
        BoardingScheduleEntity schedule = boardingAppointmentsService.getScheduleByBusinessIdAndDate(getScheduleRequest.getBusinessId(), getScheduleRequest.getDate()).orElse(null);
        return ResponseEntity.ok(schedule);
    }
}
