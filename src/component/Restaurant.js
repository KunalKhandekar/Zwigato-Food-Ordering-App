import LocationContext from "../utils/LocationContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShimmerResCard from "./SimmerUI/ShimmerResCard";
import { isMobile } from "react-device-detect";
import RestaurantCard from './RestaurantCard';
import { API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";
import NoCard from "./Error/NoCard";
import { useContext } from "react";

const Restaurant = () => {
    // State for storing list of restaurants and filtered list of restaurants
    let [listOfResturants, setlistOfResturants] = useState([]);
    let [filteredResturantsList, setfilteredResturantsList] = useState([]);
    // State for storing search text
    let [searchText, setsearchText] = useState('');
    // Getting location from context
    const { location } = useContext(LocationContext);
    const { latitude, longitude } = location;

    // Fetching data when latitude or longitude changes
    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            fetchData();
        }
    }, [latitude, longitude]);

    // Function to fetch restaurant data
    const fetchData = async () => {
        try {
            const url = isMobile ?
                `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}` :
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
            const dataPromise = await fetch(`https://proxy.cors.sh/${url}`, {
                headers: {
                    'x-cors-api-key': API_KEY
                }
            });
            const [dataResponse] = await Promise.all([dataPromise]);
            const jsonData = await dataResponse.json();
            const apiData = isMobile ?
                jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants :
                jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setlistOfResturants(apiData);
            setfilteredResturantsList(apiData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Checking online status
    if (!useOnlineStatus()) {
        return <h1>You're Offline !!! Please Check Your WIFI....</h1>
    };

    // Function to filter restaurants with rating greater than 4
    const Rating4 = () => {
        const filteredList = listOfResturants.filter((resturant) => (
            resturant.info.avgRating > 4
        ));
        setfilteredResturantsList(filteredList);
    };

    // Function to perform search
    const search = (text) => {
        setsearchText(text);

        // For Filtering from names
        const filteredRestaurants1 = listOfResturants.filter((res) => (
            res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        ));

        // For filtering from Cuisines
        const filteredRestaurants2 = listOfResturants.filter((res) => {
            const hasMatchingCuisine = res.info.cuisines.some((cuisine) =>
                cuisine.toLowerCase().includes(searchText.toLowerCase())
            );
            return hasMatchingCuisine;
        });

        // Merging both and removing the duplicate. 
        const filteredRestaurants = Array.from(new Set(filteredRestaurants1.concat(filteredRestaurants2)));
        setfilteredResturantsList(filteredRestaurants);
    };

    // Function to filter restaurants with fast delivery
    const FastDelivery = () => {
        const filteredList = listOfResturants.filter((resturant) => (
            resturant.info.sla.deliveryTime < 30
        ));
        setfilteredResturantsList(filteredList);
    };

    // Function to filter vegetarian restaurants
    const Veg = () => {
        const filteredList = listOfResturants.filter((resturant) => (
            resturant.info.veg == true
        ));
        setfilteredResturantsList(filteredList);
    };

    // Function to filter restaurants with cost less than 300
    const LessThan300 = () => {
        const filteredList = listOfResturants.filter((resturant) => (
            (resturant.info.costForTwo).slice(1, 4).trim() <= 300
        ));
        setfilteredResturantsList(filteredList);
    };

    // Function to filter restaurants with cost between 300 and 600
    const MoreThan300 = () => {
        const filteredList = listOfResturants.filter((resturant) => (
            (resturant.info.costForTwo).slice(1, 4).trim() > 300 && (resturant.info.costForTwo).slice(1, 4).trim() <= 600
        ));
        setfilteredResturantsList(filteredList);
    };

    // Function to reset filters
    const reset = () => {
        setfilteredResturantsList(listOfResturants);
    };

    // Rendering content based on restaurant data availability
    return (listOfResturants == 0) ?
        <ShimmerResCard />
        :
        (
            <div className='max-w-[1500] m-auto'>
                {/* Search input and filter buttons */}
                <div className="flex items-center py-4 gap-8 justify-between mx-5 lg:flex-col lg:text-sm">
                    <div className="">
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="px-3 py-2 text-gray-400 font-medium rounded-lg border border-solid border-orange-500 outline-none mr-2"
                            value={searchText}
                            onChange={(e) => {
                                search(e.target.value);
                            }}
                        />
                    </div>
                    <div className={`button_container flex gap-4 flex-wrap items-center justify-center`}>
                        <button className="px-4 py-1 shadow border border-solid border-red-500 font-medium rounded-2xl bg-red-500 text-white" onClick={reset}>
                            Reset
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white" onClick={Rating4}>
                            4+ Rating
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white" onClick={FastDelivery}>
                            Fast Delivery
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white" onClick={Veg}>
                            Pura Veg
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white" onClick={LessThan300}>
                            Less than 300
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white" onClick={MoreThan300}>
                            Rs. 300 - 600
                        </button >
                    </div>
                </div>

                {/* Displaying restaurants */}
                <div className="flex justify-center flex-wrap gap-4 m-7">
                    {filteredResturantsList.length == 0 ? <NoCard /> : filteredResturantsList.map(resturant => (
                        <RestaurantCard ResData={resturant} key={resturant.info.id} />
                    ))}
                </div>
            </div>
        )
};

export default Restaurant; // Exporting Restaurant Component
