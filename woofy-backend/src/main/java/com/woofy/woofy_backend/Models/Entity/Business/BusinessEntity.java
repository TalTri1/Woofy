package com.woofy.woofy_backend.Models.Entity.Business;

import com.woofy.woofy_backend.Models.Entity.AppointmentEntity;
import com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes.BusinessTypeBaseEntity;
import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
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
public class BusinessEntity {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "business_name", nullable = false)
    private String businessName;

    @OneToMany(mappedBy = "business_list", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BusinessTypeBaseEntity> businessList;

    @Column(name = "acceptable_dog_sizes", nullable = false)
    private List<DogSizeEnum> acceptableDogSizes;

    @Column(name = "address", nullable = false)
    private String address;

    @OneToMany(mappedBy = "appointments", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AppointmentEntity> appointments;

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