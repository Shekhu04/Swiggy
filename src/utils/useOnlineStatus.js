import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Initialize onlineStatus with the actual status of the browser
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    // Add event listeners for online/offline status
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return onlineStatus;
};

export default useOnlineStatus;
