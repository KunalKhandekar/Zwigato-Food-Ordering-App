import LocationContext from "./LocationContext";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import { API_KEY } from "./constants";
import { useContext } from "react";

// Custom hook to fetch restaurant menu data
const useRestaurantMenu = (resID) => {
    // State to store restaurant details
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    // State to store menu details
    const [menuDetails, setMenuDetails] = useState([]);
    // Accessing location context
    const { location } =  useContext(LocationContext);
    const { latitude, longitude } = location;

    // Effect hook to fetch menu data when location changes
    useEffect(() => {
        // Fetch menu only when latitude and longitude are available
        if (latitude !== null && longitude !== null) {
            fetchMenu();
        }
    }, [latitude, longitude]);

    // Function to fetch menu data
    const fetchMenu = async () => {
        try {
            // Constructing the URL based on device type (mobile or desktop)
            const url = isMobile ?
                `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resID}&isMenuUx4=true&submitAction=ENTER`
                :
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`;
            
            // Fetching menu data using a proxy server to bypass CORS restrictions
            const response = await fetch(`https://proxy.cors.sh/${url}`, {
                headers: {
                    'x-cors-api-key': API_KEY
                }
            });
            
            // Parsing the JSON response
            const jsonData = await response.json();
            
            // Extracting restaurant and menu details from the JSON response
            const apiData = isMobile ? jsonData?.data?.cards[5] : jsonData?.data?.cards[4];
            setRestaurantDetails(jsonData?.data?.cards[2]?.card?.card);
            setMenuDetails(apiData?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menuList) => (
                menuList?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
            )));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Returning restaurant and menu details
    return {
        restaurantDetails: restaurantDetails,
        menuDetails: menuDetails
    };
};

export default useRestaurantMenu;
