import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItems, removeItems } from '../utils/Redux/cartSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Dish = (props) => {

    const { menu } = props;
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items);

    const itemExists = cartItems.some((item) => item.menu.card.info.id === menu.card.info.id);
    const existingItemIndex = cartItems.findIndex((item) => item.menu.card.info.id === menu.card.info.id);

    const AddToCart = (menu) => {
        dispatch(addItems(menu));
        const ItemCount = cartItems[existingItemIndex]?.count || 0;
        if (ItemCount === 0) {
            toast.success('Dish Added to Cart');
        };
    };

    const RemoveFromCart = (menu) => {
        dispatch(removeItems(menu));
        const ItemCount = cartItems[existingItemIndex]?.count || 0;
        if (ItemCount === 1) {
            toast.error('Dish Removed from Cart');
        };
    }

    return (
        <div className="flex justify-between items-center border-b border-gray-600 border-solid pt-4 pb-10 last:border-b-0 gap-3 mx-2">
            <div className="w-8/12">
                <h2 className="text-lg font-semibold">{menu.card.info.name}</h2>
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
                <p className="w-12/12 text-gray-600">{menu.card.info.description}</p>
            </div>
            <div className="w-36 h-28 relative">
                <img className='w-full h-full object-cover rounded-xl' src={(!menu.card.info.imageId) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' : IMG_URL + menu.card.info.imageId} alt="dish" />
                {itemExists ?
                        <div className="flex justify-between w-20 box-border absolute -bottom-4 left-8   bg-white text-green-600 font-bold rounded-lg shadow text-sm xsm:left-5">
                            <button className='px-3 py-1 rounded-lg cursor-pointer' onClick={()=> RemoveFromCart(menu)}>-</button>
                            <p className='py-1'>{cartItems[existingItemIndex].count}</p>
                            <button className='px-3 py-1 rounded-lg cursor-pointer' onClick={()=> AddToCart(menu)}>+</button>
                        </div> : <div className="box-border absolute -bottom-4 left-8 px-6 py-1 bg-white text-green-600 font-bold rounded-lg shadow cursor-pointer hover:bg-gray-100 text-sm xsm:left-5" onClick={() => AddToCart(menu)}>ADD</div>}
                
            </div>
        </div>
    );

};

export default Dish;