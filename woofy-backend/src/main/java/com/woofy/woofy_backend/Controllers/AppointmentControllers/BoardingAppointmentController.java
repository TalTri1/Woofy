package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateBoardingAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.GetScheduleAndAppointmentDetailsRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.BoardingAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.BoardingScheduleEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.BoardingAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesRepositories.BoardingRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.BoardingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/appointment/boarding")
public class BoardingAppointmentController extends BaseAppointmentController{

    @Autowired
    private BoardingScheduleRepository boardingScheduleRepository;

    @Autowired
    private BoardingAppointmentRepository boardingAppointmentRepository;

    @Autowired
    BoardingRepository boardingRepository;

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

            // Add the new schedule to the list of schedules in the BoardingEntity
            List<BoardingScheduleEntity> boardingSchedules = boarding.getBoardingScheduleEntities();
            if (boardingSchedules == null) {
                boardingSchedules = new ArrayList<>();
            }
            boardingSchedules.add(newSchedule);
            boarding.setBoardingScheduleEntities(boardingSchedules);
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

    @PostMapping("/available-capacity-by-date-range")
    public ResponseEntity<Map<LocalDate, Integer>> getAvailableCapacityByDateRange(@RequestBody GetScheduleAndAppointmentDetailsRequest getScheduleRequest) {

        BoardingEntity boardingEntity = boardingRepository.findByBusiness_Id(getScheduleRequest.getBusinessId());
        List<BoardingScheduleEntity> schedules = boardingScheduleRepository.findAllByBoardingEntity_Business_IdAndDateBetween(
                getScheduleRequest.getBusinessId(),
                getScheduleRequest.getStartDate(),
                getScheduleRequest.getEndDate()
        );

        Map<LocalDate, Integer> availableCapacities = new HashMap<>();
        LocalDate currentDate = getScheduleRequest.getStartDate();
        while (!currentDate.isAfter(getScheduleRequest.getEndDate())) {
            BoardingScheduleEntity scheduleForCurrentDate = null;
            for (BoardingScheduleEntity schedule : schedules) {
                if (schedule.getDate().equals(currentDate)) {
                    scheduleForCurrentDate = schedule;
                    break;
                }
            }

            if (scheduleForCurrentDate != null) {
                int availableCapacity = scheduleForCurrentDate.getBoardingEntity().getDogCapacity() - scheduleForCurrentDate.getCurrentDogCapacity();
                availableCapacities.put(currentDate, availableCapacity);
            } else {

                availableCapacities.put(currentDate, boardingEntity.getDogCapacity());
            }

            currentDate = currentDate.plusDays(1);
        }

        return ResponseEntity.ok(availableCapacities);
    }

}
