import { useState, useEffect } from "react";

const useRestaurantMenu = (resID) => {
    const [restaurantDetails, setrestaurantDetails] = useState([]);
    const [menuDetails, setmenuDetails] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const locationData = await fetch('https://ipapi.co/json');
        const locationJSON = await locationData.json();
        const url = `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${locationJSON.latitude}&lng=${locationJSON.longitude}&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`;
        const main_url = url;
        const response = await fetch(main_url);
        const json1 = await response.json();
        setrestaurantDetails(json1?.data?.cards[2]?.card?.card);
        setmenuDetails(json1?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menuList) => (
            menuList?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )));

    };

    return {
        restaurantDetails: restaurantDetails,
        menuDetails: menuDetails
    };
};

export default useRestaurantMenu;