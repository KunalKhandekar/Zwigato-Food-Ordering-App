import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    let [listOfResturants, setlistOfResturants] = useState([]);
    let [filteredResturantsList, setfilteredResturantsList] = useState([]);
    let [searchText, setsearchText] = useState('');


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const locationData = await fetch('https://ipapi.co/json');
        // const locationJSON = await locationData.json();

        // const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationJSON.latitude + '0'}&lng=${locationJSON.longitude + '0'}`);
        const data = await fetch(`https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856`);

        const jsonData = await data.json();

        setlistOfResturants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResturantsList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log("result =" + jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    if (!useOnlineStatus()){
        return <h1>You're Offline !!! Please Check Your WIFI....</h1>
    }


    return (listOfResturants == 0) ?

        <ShimmerUI />

        :

        (
            <div className='max-w-[1400] m-auto'>

                <div className="flex items-center py-4 gap-8">

                    <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg" onClick={() => {
                        const filteredList = listOfResturants.filter((resturant) => (
                            resturant.info.avgRating > 4
                        ));
                        setfilteredResturantsList(filteredList);
                        console.log(filteredList)
                    }}>
                        Top Rated Returants
                    </button >

                    <div className="">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 text-black font-semibold rounded-lg border-2 border-solid border-black outline-none mr-2"
                            value={searchText}
                            onChange={(e) => {
                                setsearchText(e.target.value)
                            }}
                        />

                        <button
                            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg"
                            onClick={() => {

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
                                setsearchText('');
                            }}

                        >Search</button>
                    </div>

                </div>


                <div className="flex justify-center flex-wrap gap-4">
                    {filteredResturantsList.map(resturant => (
                        <RestrauntCard ResData={resturant} key={resturant.info.id}/>
                    ))}
                </div>
            </div >
        )
};

export default Body;
