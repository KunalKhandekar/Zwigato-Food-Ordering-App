import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import { isMobile } from "react-device-detect";

const Body = () => {

    let [listOfResturants, setlistOfResturants] = useState([]);
    let [filteredResturantsList, setfilteredResturantsList] = useState([]);
    let [searchText, setsearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

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
    }


    // const fetchData = async () => {

    //     const locationData = await fetch('https://ipapi.co/json');
    //     const locationJSON = await locationData.json();

    //     const url =
    //         isMobile ?
    //             `https://www.swiggy.com/mapi/homepage/getCards?lat=${locationJSON.latitude + '0'}&lng=${locationJSON.longitude + '0'}`
    //             :
    //             `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationJSON.latitude + '0'}&lng=${locationJSON.longitude + '0'}`

    //     const data = await fetch(`https://thingproxy-760k.onrender.com/fetch/${url}`);

    //     const jsonData = await data.json();

    //     const apiData =
    //         isMobile ?
    //             jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    //             :
    //             jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    //     setlistOfResturants(apiData);
    //     setfilteredResturantsList(apiData);
    // };

    const fetchData = async () => {
        try {
            // Get user's current location using navigator.geolocation API
            const position = await getCurrentPosition();
            const { latitude, longitude } = position.coords;
    
            const lat = Number(latitude) + 0;
            const lng = Number(longitude) + 0;
    
            const url = isMobile ?
                `https://www.swiggy.com/mapi/homepage/getCards?lat=${lat}&lng=${lng}` :
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`;
    
            const dataPromise = fetch(`https://thingproxy-760k.onrender.com/fetch/${url}`);
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
    
    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };
    


    if (!useOnlineStatus()) {
        return <h1>You're Offline !!! Please Check Your WIFI....</h1>
    };


    return (listOfResturants == 0) ?

        <ShimmerUI />

        :

        (
            <div className='max-w-[1500] m-auto'>



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

                    <div className="button_container flex gap-4 flex-wrap items-center justify-center">
                        <button className="px-4 py-1 shadow border border-solid border-red-500 font-medium rounded-2xl bg-red-500 text-white">
                            Reset
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white" onClick={() => {
                            const filteredList = listOfResturants.filter((resturant) => (
                                resturant.info.avgRating > 4
                            ));
                            setfilteredResturantsList(filteredList);
                            console.log(filteredList);
                        }}>
                            4+ Rating
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white">
                            Fast Delivery
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white">
                            Pura Veg
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white">
                            Less than 300
                        </button >
                        <button className="px-4 py-1 bg-white shadow text-orange-500 border border-solid border-orange-500 font-medium rounded-2xl focus:bg-orange-500 focus:text-white">
                            Rs. 300 - 600
                        </button >

                    </div>


                </div>


                <div className="flex justify-center flex-wrap gap-4 m-7">
                    {filteredResturantsList.map(resturant => (
                        <RestrauntCard ResData={resturant} key={resturant.info.id} />
                    ))}
                </div>
            </div >
        )
};

export default Body;
