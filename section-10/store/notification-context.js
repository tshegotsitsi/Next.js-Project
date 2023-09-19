import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState(null);

  function showNotificationHandler(notificationData) {
    setActiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status
    });
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = { notification: activeNotification, showNotification }

  return (
    <NotificationContext.Provider
      value={{
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
