package com.woofy.woofy_backend.Controllers.Image;

import com.woofy.woofy_backend.Models.Entities.ImageEntity;
import com.woofy.woofy_backend.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class ImageController {

    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/upload/image")
    public ResponseEntity<ImageEntity> uploadImage(@RequestParam("image") MultipartFile file)
            throws IOException {

        ImageEntity savedImage = imageRepository.save(ImageEntity.builder()
                .imageName(file.getOriginalFilename())
                .type(file.getContentType())
                .picByte(ImageUtility.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(savedImage);
    }


    @GetMapping(path = {"/get/image/{id}"})
    public ResponseEntity<byte[]> getImageById(@PathVariable("id") Long id) throws IOException {
        Optional<ImageEntity> dbImage = imageRepository.findById(id);

        if (dbImage.isPresent()) {

            ImageEntity imageEntity = dbImage.get();
            String contentType = imageEntity.getType();
            if (contentType == null || contentType.isEmpty()) {
                contentType = "image/png"; // Default to PNG if content type is not provided
            }

            return ResponseEntity
                    .ok()
                    .contentType(MediaType.valueOf(dbImage.get().getType()))
                    .body(ImageUtility.decompressImage(dbImage.get().getPicByte()));
        } else {
            // Return 404 Not Found if the image with the given ID doesn't exist
            return ResponseEntity.notFound().build();
        }
    }

    // Delete image by id if exists
    @DeleteMapping("/delete/image/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable("id") Long id) {
        Optional<ImageEntity> dbImage = imageRepository.findById(id);
        if (dbImage.isPresent()) {
            imageRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}