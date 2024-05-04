package com.woofy.woofy_backend.Models.Entities;

import com.woofy.woofy_backend.Models.Enums.DogEnums.DogAgeCategoryEnum;
import com.woofy.woofy_backend.Models.Enums.DogEnums.DogSizeEnum;
import com.woofy.woofy_backend.Models.Enums.DogEnums.DogTrainingEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "dog")
public class DogEntity extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity owner;

    @Column(name = "dog_name", nullable = false)
    private String dogName;

    @Column(name = "breed", nullable = false)
    private String dog_breed;

    @Enumerated(EnumType.STRING)
    @Column(name = "age")
    private DogAgeCategoryEnum age;

    @Enumerated(EnumType.STRING)
    @Column(name = "size")
    private DogSizeEnum size;

    @Enumerated(EnumType.STRING)
    @Column(name = "training_level")
    private DogTrainingEnum trainingLevel;

    @Column(name = "about", length = 2000)
    private String about;

    @Column(name = "special_requirements")
    private String specialRequirements = "";

    @OneToMany(mappedBy = "imageID", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ImageEntity> images = new ArrayList<>();


}