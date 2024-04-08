import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";


const Body = () => {

    let [listOfResturants, setlistOfResturants] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560");

        const jsonData = await data.json();

        setlistOfResturants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return (listOfResturants == 0) ?

        <ShimmerUI />

        :

        (
            <div className='main-container'>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfResturants.filter((resturant) => (
                        resturant.info.avgRating > 4
                    ));
                    setlistOfResturants(filteredList);
                    console.log(filteredList)
                }}>
                    Top Rated Returants
                </button >


                <div className="restruant-container">
                    {listOfResturants.map(resturant => (
                        <RestrauntCard ResData={resturant} />
                    ))}
                </div>
            </div>
        )
};

export default Body;
