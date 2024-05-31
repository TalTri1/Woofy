package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.DTOs.AppointmentDTOs.CreateDayCareAppointmentRequest;
import com.woofy.woofy_backend.DTOs.AppointmentDTOs.GetScheduleAndAppointmentDetailsRequest;
import com.woofy.woofy_backend.Models.Entities.AppointmentEntities.BusinessTypesAppointmentEntities.DayCareAppointmentEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Models.Entities.CustomerEntity;
import com.woofy.woofy_backend.Models.Entities.ScheduleEntities.BusinessTypesScheduleEntities.DayCareScheduleEntity;
import com.woofy.woofy_backend.Models.Enums.WorkingDaysEnum;
import com.woofy.woofy_backend.Repositories.BusinessTypesAppointmentRepositories.DayCareAppointmentRepository;
import com.woofy.woofy_backend.Repositories.BusinessTypesScheduleRepositories.DayCareScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/appointment/day-care")
public class DayCareAppointmentController extends BaseAppointmentController{

    @Autowired
    private DayCareScheduleRepository dayCareScheduleRepository;

    @Autowired
    private DayCareAppointmentRepository dayCareAppointmentRepository;


    @PostMapping("/create-appointment")
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

            // Add the new schedule to the list of schedules in the DayCareEntity
            List<DayCareScheduleEntity> dayCareSchedules = dayCare.getDayCareScheduleEntities();
            if (dayCareSchedules == null) {
                dayCareSchedules = new ArrayList<>();
            }
            dayCareSchedules.add(newSchedule);
            dayCare.setDayCareScheduleEntities(dayCareSchedules);
        }

        DayCareAppointmentEntity dayCareAppointmentEntity = new DayCareAppointmentEntity();
        dayCareAppointmentEntity.setDate(newAppointmentRequest.getDate());
        dayCareAppointmentEntity.setDayCareEntity(dayCare);
        dayCareAppointmentEntity.setDogId(customer.getDog().getId());

        // Add the new appointment to the list of appointments in the DayCareEntity
        List<DayCareAppointmentEntity> dayCareAppointments = dayCare.getDayCareAppointmentEntities();
        if (dayCareAppointments == null) {
            dayCareAppointments = new ArrayList<>();
        }
        dayCareAppointments.add(dayCareAppointmentEntity);
        dayCare.setDayCareAppointmentEntities(dayCareAppointments);

        dayCareAppointmentRepository.save(dayCareAppointmentEntity);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/available-capacity-by-date")
    public ResponseEntity<Integer> getAvailableCapacity(@RequestBody GetScheduleAndAppointmentDetailsRequest getScheduleRequest) {
        Optional<DayCareScheduleEntity> optionalSchedule = dayCareScheduleRepository.findByDayCareEntity_Business_IdAndDate(getScheduleRequest.getBusinessId(), getScheduleRequest.getDate());
        if (optionalSchedule.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Schedule not found for the given date and business ID");
        }
        DayCareScheduleEntity schedule = optionalSchedule.get();
        int availableCapacity = schedule.getDayCareEntity().getDogCapacity() - schedule.getCurrentDogCapacity();
        return ResponseEntity.ok(availableCapacity);
    }
}
