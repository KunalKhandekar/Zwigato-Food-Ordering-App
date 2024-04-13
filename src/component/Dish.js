import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../utils/constants';

const Dish = (props) => {

    const {menu} = props;

    if (!menu.card.info.imageId) return;

    return (
        <div className="dish">
            <div className="left-side">
                <h2 className="dish_name">{menu.card.info.name}</h2>
                <p className="dish_price">
                    <FontAwesomeIcon icon={faRupeeSign} /> {(menu.card.info.defaultPrice / 100) || (menu.card.info.price / 100)}
                </p>
                <p className="dish_rating">
                    {menu.card.info.ratings.aggregatedRating.rating ? (
                        <>
                            <FontAwesomeIcon className='icon' icon={faStar} />
                            {menu.card.info.ratings.aggregatedRating.rating}
                            <span>({menu.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                        </>
                    ) : (
                        ''
                    )}
                </p>
                <p className="dish_desc">{menu.card.info.description}</p>
            </div>
            <div className="right-side">
                <img src={IMG_URL + menu.card.info.imageId} alt="dish" />
                <div className="add">ADD</div>
            </div>
        </div>
    );

};

export default Dish;