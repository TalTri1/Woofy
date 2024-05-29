package com.woofy.woofy_backend.Controllers.AppointmentControllers;

import com.woofy.woofy_backend.Repositories.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/appointment")
public class BaseAppointmentController {

    @Autowired
    protected BusinessRepository businessRepository;
}