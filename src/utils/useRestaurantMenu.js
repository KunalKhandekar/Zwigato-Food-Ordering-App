import { useState, useEffect } from "react";

const useRestaurantMenu = (resID) => {
    const [restaurantDetails, setrestaurantDetails] = useState([]);
    const [menuDetails, setmenuDetails] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data1 = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0748&lng=72.8856&restaurantId=` + resID);
        const json1 = await data1.json();
        setrestaurantDetails(json1?.data?.cards[2]?.card?.card);
        setmenuDetails(json1?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menuList)=> (
            menuList?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )));

    };

    return {
        restaurantDetails : restaurantDetails,
        menuDetails : menuDetails
    };
};

export default useRestaurantMenu;