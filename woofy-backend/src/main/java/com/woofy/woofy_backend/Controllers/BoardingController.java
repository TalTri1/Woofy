package com.woofy.woofy_backend.Controllers;

import com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Services.BoardingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/business/boarding")
public class BoardingController {

    private BoardingService boardingService;

    @PostMapping("/create")
    public BoardingEntity createBoarding(@RequestBody BoardingEntity boarding) {
        return boardingService.createBoarding(boarding);
    }
}