import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../utils/constants';
import { useState } from 'react';

const Dish = (props) => {

    const {menu} = props;

    return (
        <div className="flex justify-between border-b border-gray-600 border-solid pt-4 pb-10 last:border-b-0">
            <div className="">
                <h2 className="text-xl font-bold">{menu.card.info.name}</h2>
                <p className='text-sm mb-2 font-semibold' >
                    <FontAwesomeIcon icon={faRupeeSign} /> {(menu.card.info.defaultPrice / 100) || (menu.card.info.price / 100)}
                </p>
                <p className="mb-1 text-green-700">
                    {menu.card.info.ratings.aggregatedRating.rating ? (
                        <>
                            <FontAwesomeIcon className='icon w-3.5 mr-1.5' icon={faStar} />
                            {menu.card.info.ratings.aggregatedRating.rating}
                            <span className='text-black'> ({menu.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                        </>
                    ) : (
                        ''
                    )}
                </p>
                <p className="w-[490px] text-gray-600">{menu.card.info.description}</p>
            </div>
            <div className="w-52 h-52 relative">
                <img className='w-full h-full rounded-xl' src={(!menu.card.info.imageId) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' : IMG_URL+menu.card.info.imageId} alt="dish" />
                <div className="absolute -bottom-4 left-[50px] px-10 py-2 bg-white text-green-600 font-bold rounded-lg shadow cursor-pointer hover:bg-gray-100">ADD</div>
            </div>
        </div>
    );

};

export default Dish;