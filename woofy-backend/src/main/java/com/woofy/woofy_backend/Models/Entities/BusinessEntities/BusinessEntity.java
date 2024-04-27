package com.woofy.woofy_backend.Models.Entities.BusinessEntities;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dog_sitter_id", referencedColumnName = "dog_sitter_id")
    private DogSitterEntity dogSitterEntity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dog_walker_id", referencedColumnName = "dog_walker_id")
    private DogWalkerEntity dogWalkerEntity;

/*    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "boarding_id", referencedColumnName = "boarding_id")
    private BoardingEntity boardingEntity;*/

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "day_care_id", referencedColumnName = "day_care_id")
    private DayCareEntity dayCareEntity;

    @Column(name = "acceptable_dog_sizes", nullable = false)
    private List<DogSizeEnum> acceptableDogSizes;

    @Column(name = "address", nullable = false)
    private String address;

/*    @OneToMany(mappedBy = "appointments", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AppointmentEntity> appointments;*/

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