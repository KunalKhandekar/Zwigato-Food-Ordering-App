import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

const useRestaurantMenu = (resID) => {
    const [restaurantDetails, setrestaurantDetails] = useState([]);
    const [menuDetails, setmenuDetails] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const locationData = await fetch('https://ipapi.co/json');
        const locationJSON = await locationData.json();
        const url = isMobile ?
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${locationJSON.latitude}&lng=${locationJSON.longitude}&restaurantId=${resID}&isMenuUx4=true&submitAction=ENTER`
        :
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${locationJSON.latitude}&lng=${locationJSON.longitude}&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`
        ;
        const main_url = url;
        const response = await fetch('https://thingproxy.freeboard.io/fetch/'+main_url);
        const json1 = await response.json();
        const apiData = isMobile ? json1?.data?.cards[5]  : json1?.data?.cards[4]
        setrestaurantDetails(json1?.data?.cards[2]?.card?.card);
        setmenuDetails(apiData?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menuList) => (
            menuList?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )));

    };

    return {
        restaurantDetails: restaurantDetails,
        menuDetails: menuDetails
    };
};

export default useRestaurantMenu;