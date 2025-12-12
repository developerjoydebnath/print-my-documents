// hooks/useNotificationPermission.ts
import { useCallback, useEffect, useState } from "react";

export const useNotificationPermission = () => {
  const [permission, setPermission] =
    useState<NotificationPermission>("default");
  const [isRequesting, setIsRequesting] = useState(false);

  // Check if user already granted/denied permission
  const checkPermission = useCallback(() => {
    const currentPermission = Notification.permission;
    setPermission(currentPermission);
    return currentPermission;
  }, []);

  // Request permission (one-time only)
  const requestPermission = useCallback(async () => {
    if (permission !== "default" || isRequesting) return permission;

    setIsRequesting(true);

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    } finally {
      setIsRequesting(false);
    }
  }, [permission, isRequesting]);

  // Check permission on mount
  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return {
    permission,
    isRequesting,
    requestPermission,
    checkPermission,
  };
};
