import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addItems, removeItems } from '../utils/Redux/cartSlice'; 
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 
import { toast } from 'react-toastify';

const Dish = (props) => {
    const { menu, ResID, input, ResName, ResArea } = props; // Destructuring menu, ResID, input, ResName, and ResArea from props
    const dispatch = useDispatch(); // Getting dispatch function from useDispatch hook
    const RestaurantID = useSelector((store) => store.cart.RestaurantID); // Accessing RestaurantID from Redux store using useSelector hook
    const cartItems = useSelector((store) => store.cart.items); // Accessing cart items from Redux store using useSelector hook

    // Checking if the item already exists in the cart
    const itemExists = cartItems.some((item) => item.menu.card.info.id === menu.card.info.id);
    const existingItemIndex = cartItems.findIndex((item) => item.menu.card.info.id === menu.card.info.id);

    // Function to add item to cart
    const AddToCart = (menu, ResID, ResName, ResArea) => {
        if (RestaurantID === null || RestaurantID === ResID) {
            dispatch(addItems({ menu, ResID, ResName, ResArea }));
            const ItemCount = cartItems[existingItemIndex]?.count || 0;
            if (ItemCount === 0) {
                toast.success('Dish Added to Cart');
            };
        } else {
            toast.info('Your Cart Contain Dishes from other Restaurant');
            return;
        };
    };

    // Function to remove item from cart
    const RemoveFromCart = (menu) => {
        dispatch(removeItems(menu));
        const ItemCount = cartItems[existingItemIndex]?.count || 0;
        if (ItemCount === 1) {
            toast.error('Dish Removed from Cart');
        };
    };

    return (input === 'cart') ?  
        (
            // Display dish in cart view
            <div className="flex justify-between items-center border-b border-gray-600 border-solid pt-4 pb-10 last:border-b-0 gap-3 mx-2 xsm:pt-2 xsm:pb-8">
                <div className="w-8/12">
                    <h2 className="text-lg font-semibold">{menu.card.info.name}</h2>
                    <p className='text-sm mt-2 font-semibold' >&#8377;{Math.trunc((menu.card.info.defaultPrice / 100)*cartItems[existingItemIndex].count) || Math.trunc((menu.card.info.price / 100)*cartItems[existingItemIndex].count)}
                    </p>
                </div>
                <div className="w-32 h-24 sm:w-28 sm:h-20 relative flex justify-center">
                    <img className='w-full h-full object-cover rounded-xl' src={(!menu.card.info.imageId) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' : IMG_URL + menu.card.info.imageId} alt="dish" />
                    {itemExists ?
                        <div className="flex justify-between w-20 box-border absolute -bottom-4  bg-white text-green-600 font-bold rounded-lg shadow text-sm ">
                            <button className='px-3 py-1 rounded-lg cursor-pointer' onClick={() => RemoveFromCart(menu)}>-</button>
                            <p className='py-1'>{cartItems[existingItemIndex].count}</p>
                            <button className='px-3 py-1 rounded-lg cursor-pointer' onClick={() => AddToCart(menu, ResID)}>+</button>
                        </div> : <div className="box-border absolute -bottom-4 left-8 px-6 py-1 bg-white text-green-600 font-bold rounded-lg shadow cursor-pointer hover:bg-gray-100 text-sm xsm:left-5" onClick={() => AddToCart(menu, ResID)}>ADD</div>}
                </div>
            </div>
        ) : 
        (
            // Display dish in Restaurant Menu view
            <div className="flex justify-between items-center border-b border-gray-600 border-solid pt-4 pb-10 last:border-b-0 gap-3 mx-2">
                <div className="w-8/12">
                    <h2 className="text-lg font-semibold">{menu.card.info.name}</h2>
                    <p className='text-sm mb-2 font-semibold' >&#8377;{(menu.card.info.defaultPrice / 100) || (menu.card.info.price / 100)}
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
                            <button className='px-3 py-1 rounded-lg cursor-pointer' onClick={() => RemoveFromCart(menu)}>-</button>
                            <p className='py-1'>{cartItems[existingItemIndex].count}</p>
                            <button className='px-3 py-1 rounded-lg cursor-pointer' onClick={() => AddToCart(menu, ResID, ResName, ResArea)}>+</button>
                        </div> : <div className="box-border absolute -bottom-4 left-8 px-6 py-1 bg-white text-green-600 font-bold rounded-lg shadow cursor-pointer hover:bg-gray-100 text-sm xsm:left-5" onClick={() => AddToCart(menu, ResID, ResName, ResArea)}>ADD</div>}
                </div>
            </div>
        );
};

export default Dish; // Exporting Dish Component