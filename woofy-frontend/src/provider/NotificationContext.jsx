import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/api';
import {useAuth} from "./AuthProvider";


// Create the context
const NotificationContext = createContext();

// Custom hook to use the Notification context
export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const { token } = useAuth();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (token) {
            // Fetch notifications from the backend when the component mounts
            const fetchNotifications = async () => {
                try {
                    const response = await api.get('/notifications');
                    setNotifications(response.data);
                } catch (error) {
                    console.error('Error fetching notifications:', error);
                }
            };

            fetchNotifications();
        }
    }, [token]);

    const addNotification = async (notification) => {
        try {
            const response = await api.post('notifications', notification);
            setNotifications((prevNotifications) => [...prevNotifications, response.data]);
        } catch (error) {
            console.error('Error adding notification:', error);
        }
    };

    const markAllAsRead = async () => {
        try {
            await api.put('/notifications/mark-all-as-read');
            setNotifications((prevNotifications) =>
                prevNotifications.map((notification) => ({
                    ...notification,
                    isUnRead: false,
                }))
            );
        } catch (error) {
            console.error('Error marking notifications as read:', error);
        }
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, markAllAsRead }}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
