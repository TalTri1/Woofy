package com.woofy.woofy_backend.Models.Entity.Business.BusinessTypes;

import jakarta.persistence.Column;
import jakarta.persistence.Inheritance;

@Inheritance
public class BusinessTypeBaseEntity {

    @Column(name = "business_type")
    protected String businessType;

}
