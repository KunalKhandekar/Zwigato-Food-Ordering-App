import { faUtensils, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from './SimmerUI/ShimmerMenu';
import { useParams } from 'react-router-dom';
import DishContainer from './DishContainer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const RestaurantMenu = () => {
    const { resID } = useParams(); // Destructuring resID from useParams
    const { restaurantDetails, menuDetails } = useRestaurantMenu(resID); // Destructuring restaurantDetails and menuDetails from useRestaurantMenu hook
    const cartItems = useSelector((store) => store.cart.items); // Using useSelector hook to get cart items from Redux store

    // If restaurantDetails or menuDetails are empty, display ShimmerMenu component
    if (restaurantDetails == 0 || menuDetails == 0) return < ShimmerMenu/>;

    // Destructuring necessary data from restaurantDetails
    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        sla,
        feeDetails,
        labels,
        id,
        areaName
    } = restaurantDetails?.info;

    return (
        <>
            {/* Conditional rendering for cart link */}
            {(cartItems.length >= 1) ? <Link to='/cart'>
                <div className='max-w-[900px] m-auto'>
                    <div className='fixed bottom-0 z-20 flex justify-between px-3 py-3 bg-orange-400 w-[900px] max-w-[900px] slg:w-full'>
                        <span className='text-lg font-semibold text-white'>{cartItems.length} Dish{(cartItems.length == 1) ? '': 'es' } in Cart</span>
                        <button className='font-lg font-semibold'><Link to="/cart" className="px-4 text-white font-semibold rounded-lg">
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", }} /> View Cart ({cartItems.length})
                        </Link></button>
                    </div>
                </div>
            </Link> : ''}
            <div className="max-w-[900px] m-auto p-6 pb-2 mt-6 rounded-lg shadow-lg slg:mx-6">
                {/* Restaurant information */}
                <div>
                    <h2 className='font-semibold text-3xl pb-3 xsm:text-2xl xxsm:text-xl'>{name}</h2>
                    <div className="border-2 border-black border-solid flex flex-col gap-2 p-3 rounded-lg shadow-xl">
                        {/* Restaurant ratings, cost, cuisines, and sla */}
                        <div className="flex xxsm:flex-col xxsm:gap-2">
                            <div className="flex items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                                    <defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs>
                                </svg>
                                {avgRating} ({totalRatingsString})
                            </div>
                            <div className="mx-2 xxsm:hidden">|</div>
                            <div className="price">{costForTwoMessage}</div>
                        </div>
                        <div className="text-orange-600 font-normal">{cuisines.join(', ')}</div>
                        <div className="time">{sla.slaString}</div>
                        {/* Delivery fee details */}
                        <div className="flex items-center">
                            {(feeDetails.message) ?
                                <>
                                    <img className='w-6 mr-2 sm:w-6 h-6' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="cycle" />
                                    <p className='font-thin text-gray-800'>{(feeDetails.message).replace(/<\/?b>/g, '')}</p>
                                </>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
                {/* Restaurant menu */}
                <div className="flex justify-center items-center gap-2 my-5">
                    <FontAwesomeIcon icon={faUtensils} style={{ color: '#c0c0c0' }} />
                    <h2 className='font-normal text-lg text-gray-600'>Dishes</h2>
                    <FontAwesomeIcon icon={faUtensils} style={{ color: '#c0c0c0' }} />
                </div>
            </div>
            {/* Dish containers */}
            <div className="max-w-[900px] m-auto mb-10">
                {menuDetails.map((menuList, index) => (
                    <DishContainer
                        key={index}
                        data={menuList}
                        ResID={id}
                        ResName={name}
                        ResArea={areaName}
                    />
                ))}
            </div>
            {/* Restaurant Footer */}
            <div className='max-w-[900px] m-auto p-6 pb-[50px] mt-6 rounded-tl-lg rounded-tr-lg slg:mx-6 bg-slate-300'>
                <div className='flex gap-5 items-center mb-6 pb-8'>
                    <img className='w-20' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="FSSAI" />
                    <h3> License No. 11520110000105</h3>
                </div>
                <div>
                    <h2 className='font-semibold text-lg pb-5'>{name}</h2>
                    <h4 className='font-semibold text-sm pb-8'>Address : {labels[1].message}</h4>
                </div>
            </div>
        </>
    );
};

export default RestaurantMenu; // Exporting RestaurantMenu Component