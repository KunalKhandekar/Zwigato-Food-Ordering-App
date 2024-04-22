import { useEffect, useState } from "react";

// Custom hook to track online status
const useOnlineStatus = () => {
    // State to store online status
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=> {
        // Event listener to update online status when browser is online
        window.addEventListener('online', ()=>{
            setOnlineStatus(true); // Set onlineStatus to true when browser is online
        })

        // Event listener to update online status when browser is offline
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false); // Set onlineStatus to false when browser is offline
        })

    }, [])

    // Return current online status
    return onlineStatus;
};

export default useOnlineStatus;
