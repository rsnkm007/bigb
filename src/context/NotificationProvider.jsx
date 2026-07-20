import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

function NotificationProvider({ children }) {

    const [notifications, setNotifications] = useState([]);

    const addNotification = (message) => {

        const newNotification = {
            id: Date.now(),
            message,
            time: new Date().toLocaleString(),
            read: false
        };

        setNotifications(prev => [newNotification, ...prev]);

    };

    const markAsRead = (id) => {

        setNotifications(prev =>
            prev.map(notification =>
                notification.id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );

    };

    return (

        <NotificationContext.Provider
            value={{
                notifications,
                addNotification,
                markAsRead
            }}
        >
            {children}
        </NotificationContext.Provider>

    );

}

export default NotificationProvider;