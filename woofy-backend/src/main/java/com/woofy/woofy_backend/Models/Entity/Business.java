package com.woofy.woofy_backend.Models.Entity;

import com.woofy.woofy_backend.Models.Enums.BusinessType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "business")
public class Business {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "business_name", nullable = false)
    private String businessName;

    @Column(name = "business_type", nullable = false)
    private List<BusinessType> businessType;

//    @Column(name = "address", nullable = false)
//    private String address;

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Appointment> appointments;

    @Column(name = "description")
    private String description;

    @Column(name = "website")
    private String website;

    @Column(name = "logo")
    private String logo;

    @Column(name = "cover_photo")
    private String coverPhoto;

    @Column(name = "profile_photo")
    private String profilePhoto;

    @Column(name = "social_media")
    private String socialMedia;

}