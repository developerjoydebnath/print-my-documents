// hooks/useBrowserNotification.ts
import { useCallback } from "react";

export interface NotificationData {
  id: string;
  title: string;
}

export const useBrowserNotifications = (
  callback: (data: NotificationData) => void,
) => {
  const showNotification = useCallback(
    async (data: NotificationData) => {
      // Request permission if needed
      if (Notification.permission === "default") {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") return;
      }

      if (Notification.permission !== "granted") return;

      const notification = new Notification("New Message", {
        body: data.title,
        icon: "/images/logo-small.png",
        tag: data.id,
        requireInteraction: true,
        silent: false,
      });

      // Handle clicks
      notification.onclick = () => {
        window.focus();
        notification.close();
        callback(data);
      };

      // Auto-close after 8s
      setTimeout(() => notification.close(), 8000);
    },
    [callback],
  );

  return showNotification;
};
