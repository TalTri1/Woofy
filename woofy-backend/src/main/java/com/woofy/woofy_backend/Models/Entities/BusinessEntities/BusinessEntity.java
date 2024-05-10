package com.woofy.woofy_backend.Models.Entities.BusinessEntities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogSitterEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.Homestay.DogWalkerEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.BoardingEntity;
import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessTypesEntities.StayAtBusiness.DayCareEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Models.Enums.BusinessTypeEnum;
import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Entity
@SuperBuilder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "business")
public class BusinessEntity extends UserEntity {

    @Column(name = "business_name")
    private String businessName;

    @ElementCollection(targetClass = BusinessTypeEnum.class, fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @Column(name = "business_types")
    private List<BusinessTypeEnum> businessTypes;


    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dog_sitter_id", referencedColumnName = "dog_sitter_id")
    private DogSitterEntity dogSitterEntity;

    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dog_walker_id", referencedColumnName = "dog_walker_id")
    private DogWalkerEntity dogWalkerEntity;

    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "boarding_id", referencedColumnName = "boarding_id")
    private BoardingEntity boardingEntity;

    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "day_care_id", referencedColumnName = "day_care_id")
    private DayCareEntity dayCareEntity;

    @Column(name = "website")
    private String website;

    @Column(name = "social_media")
    private String socialMedia;

    @Column(name = "about", length = 2000)
    private String about;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "business_images", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "image_id")
    private List<Integer> images = new ArrayList<>();

}