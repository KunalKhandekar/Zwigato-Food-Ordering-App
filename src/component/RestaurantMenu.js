// import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStar, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const RestaurantMenu = () => {

    const [restaurantDetails, setrestaurantDetails] = useState([]);
    const [menuDetails, setmenuDetails] = useState([]);
    const { resID } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data1 = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0748&lng=72.8856&restaurantId=` + resID);
        const json1 = await data1.json();
        setrestaurantDetails(json1?.data?.cards[2]?.card?.card);
        setmenuDetails(json1?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log(json1?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };

    if (restaurantDetails == 0) return <ShimmerUI />


    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        sla,
        feeDetails,
    } = restaurantDetails.info;




    return (

        <div className="main-menu-container">
            <div className="top-info">
                <h2>{name}</h2>
                <div className="basic_info">

                    <div className="first-row">
                        <div className="star">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg> {avgRating} ({totalRatingsString})
                        </div>
                        <div className="middle_dot">|</div>
                        <div className="price">{costForTwoMessage}</div>
                    </div>

                    <div className="cuisines">{cuisines.join(', ')}</div>
                    <div className="time">{sla.slaString}</div>

                    <div className="delivery">
                        {(feeDetails.message) ?
                            <>
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="cycle" />
                                <p>{(feeDetails.message).replace(/<\/?b>/g, '')}</p>
                            </>
                            :
                            ""
                        }
                    </div>

                </div>
            </div>

            <div className="menu-loader">
                <FontAwesomeIcon icon={faUtensils} style={{ color: '#c0c0c0' }} />
                <h2>Dishes</h2>
                <FontAwesomeIcon icon={faUtensils} style={{ color: '#c0c0c0' }} />
            </div>

            {/* <div className="dishes-info">
            {menuDetails.map(menuList => (
                menuList.card.card.itemCards.map(menuItem => (
                    <div className="dish">
                <div className="left-side">

                    <h2 className="dish_name">{menuItem.card.info.name}</h2>

                    <p className="dish_price">
                        <FontAwesomeIcon icon={faRupeeSign} /> {(menuItem.card.info.defaultPrice / 100) || (menuItem.card.info.price / 100)}
                    </p>

                    <p className="dish_rating">
                        <FontAwesomeIcon className='icon' icon={faStar} /> {menuItem.card.info.ratings.aggregatedRating.rating} <span>({menuItem.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                    </p>

                    <p className="dish_desc">{menuItem.card.info.description}</p>

                </div>

                <div className="right-side">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuItem.card.info.imageId}`} alt="dish" />
                    <div className="add">ADD</div>
                </div>
            </div>
                ))
                
                
            ))}
                

            </div> */}

            <div className="dishes-info">
                {menuDetails.map((menuList, index) => (
                    <React.Fragment key={index}>
                        {menuList?.card?.card?.itemCards && menuList.card.card.itemCards.map(menuItem => (
                            <div className="dish" key={menuItem.card.info.id}>
                                <div className="left-side">
                                    <h2 className="dish_name">{menuItem.card.info.name}</h2>
                                    <p className="dish_price">
                                        <FontAwesomeIcon icon={faRupeeSign} /> {(menuItem.card.info.defaultPrice / 100) || (menuItem.card.info.price / 100)}
                                    </p>



                                    <p className="dish_rating">
                                        {menuItem.card.info.ratings.aggregatedRating.rating ? (
                                            <>
                                                <FontAwesomeIcon className='icon' icon={faStar} />
                                                {menuItem.card.info.ratings.aggregatedRating.rating}
                                                <span>({menuItem.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                                            </>
                                        ) : (
                                            '  '
                                        )}
                                    </p>



                                    <p className="dish_desc">{menuItem.card.info.description}</p>
                                </div>
                                <div className="right-side">
                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuItem.card.info.imageId}`} alt="dish" />
                                    <div className="add">ADD</div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>


        </div>
    )
};

export default RestaurantMenu;
