package com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes;

import com.woofy.woofy_backend.Models.Entity.Business.BusinessEntity;
import jakarta.persistence.*;


@MappedSuperclass
public class BusinessTypeBaseEntity {

    @OneToOne
    @JoinColumn(name = "business_id")
    private BusinessEntity business;

    @Column(name = "business_type")
    protected String businessType;



}
