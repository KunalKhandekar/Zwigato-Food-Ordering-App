import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";


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
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856`);

        const jsonData = await data.json();

        setlistOfResturants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResturantsList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("result =" + jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    return (listOfResturants == 0) ?

        <ShimmerUI />

        :

        (
            <div className='main-container'>

                <div className="filter">

                    <button className="filter-btn" onClick={() => {
                        const filteredList = listOfResturants.filter((resturant) => (
                            resturant.info.avgRating > 4
                        ));
                        setfilteredResturantsList(filteredList);
                        console.log(filteredList)
                    }}>
                        Top Rated Returants
                    </button >

                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                            value={searchText}
                            onChange={(e) => {
                                setsearchText(e.target.value)
                            }}
                        />

                        <button
                            className="search-btn"
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


                <div className="restruant-container">
                    {filteredResturantsList.map(resturant => (
                        <RestrauntCard ResData={resturant} />
                    ))}
                </div>
            </div >
        )
};

export default Body;
