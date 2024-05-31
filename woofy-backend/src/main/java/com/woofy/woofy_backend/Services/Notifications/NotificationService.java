package com.woofy.woofy_backend.Services.Notifications;

import com.woofy.woofy_backend.Models.Entities.Notifications.NotificationEntity;
import com.woofy.woofy_backend.Repositories.Notifications.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<NotificationEntity> getNotificationsForUser(Integer userId) {
        return notificationRepository.findByUserId(userId);
    }

    public NotificationEntity addNotification(NotificationEntity notification) {
        return notificationRepository.save(notification);
    }

    public void markAllAsRead(Integer userId) {
        List<NotificationEntity> notifications = notificationRepository.findByUserId(userId);
        notifications.forEach(notification -> notification.setUnRead(false));
        notificationRepository.saveAll(notifications);
    }
}