package com.woofy.woofy_backend.Models.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "picture")
public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "url", nullable = false)
    private String url;

    @ManyToOne
    @JoinColumn(name = "dog_id")
    private Dog dog;

    @ManyToOne
    @JoinColumn(name = "business_id")
    private Business business;

}