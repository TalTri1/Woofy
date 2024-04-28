package com.woofy.woofy_backend.Models.Entities;

import com.woofy.woofy_backend.Models.Entities.BusinessEntities.BusinessEntity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "picture")
public class PictureEntity extends BaseEntity{

    @Column(name = "url", nullable = false)
    private String url;

    @ManyToOne
    @JoinColumn(name = "dog_id")
    private DogEntity dog;
    
}