package com.woofy.woofy_backend;

import com.woofy.woofy_backend.DTO.RegisterRequest;
import com.woofy.woofy_backend.Services.AuthenticationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import static com.woofy.woofy_backend.Models.Enums.RoleEnum.ADMIN;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class WoofyBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(WoofyBackendApplication.class, args);
	}

}
