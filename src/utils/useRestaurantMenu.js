import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import LocationContext from "./LocationContext";
import { useContext } from "react";

const useRestaurantMenu = (resID) => {
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [menuDetails, setMenuDetails] = useState([]);
    const { location } =  useContext(LocationContext);
    const { latitude, longitude } = location;

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            fetchMenu();
        }
    }, [latitude, longitude]);

    const fetchMenu = async () => {
        try {
    
            const url = isMobile ?
                `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resID}&isMenuUx4=true&submitAction=ENTER`
                :
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`;
    
            const response = await fetch(`https://proxy.cors.sh/${url}`, {
                headers: {
                'x-cors-api-key': 'temp_08a8b551696538e5f949f708a4483487'
                }
              });
            const jsonData = await response.json();
            console.log("Fetched JSON Data:", jsonData); // Log the fetched JSON data
    
            const apiData = isMobile ? jsonData?.data?.cards[5] : jsonData?.data?.cards[4];
            setRestaurantDetails(jsonData?.data?.cards[2]?.card?.card);
            setMenuDetails(apiData?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menuList) => (
                menuList?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
            )));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    return {
        restaurantDetails: restaurantDetails,
        menuDetails: menuDetails
    };
};

export default useRestaurantMenu;
