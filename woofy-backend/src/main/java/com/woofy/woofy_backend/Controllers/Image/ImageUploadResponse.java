package com.woofy.woofy_backend.Controllers.Image;

import lombok.Data;

@Data
public class ImageUploadResponse {
    private String message;

    public ImageUploadResponse(String message) {
        this.message = message;
    }

}
