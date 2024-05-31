package com.woofy.woofy_backend.Controllers.Notifications;

import com.woofy.woofy_backend.Models.Entities.Notifications.NotificationEntity;
import com.woofy.woofy_backend.Models.Entities.UserEntity;
import com.woofy.woofy_backend.Services.Notifications.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<NotificationEntity> getNotifications(Principal connectedUser) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        return notificationService.getNotificationsForUser(user.getId());
    }

    @PostMapping
    public NotificationEntity addNotification(@RequestBody NotificationEntity notification, Principal connectedUser) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        notification.setUserId(user.getId());
        return notificationService.addNotification(notification);
    }

    @PutMapping("/mark-all-as-read")
    public void markAllAsRead(Principal connectedUser) {
        UserEntity user = (UserEntity) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        notificationService.markAllAsRead(user.getId());
    }
}