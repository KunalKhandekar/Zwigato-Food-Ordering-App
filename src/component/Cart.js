import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartImg from '../images/EmptyCart.webp'
import Dish from "./Dish";
import ResImg from '../images/ResImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const TotalPrice = useSelector((store) => store.cart.TotalPrice);
    const ResID = useSelector((store) => store.cart.RestaurantID);
    const ResName = useSelector((store) => store.cart.RestaurantName);
    const ResArea = useSelector((store) => store.cart.RestaurantArea);

    console.log(ResName);

    return (
<>
        {(cartItems.length >= 1) ? <Link to='/cart'>
        <div className='max-w-[900px] m-auto'>
            <div className='fixed bottom-0 z-20 flex justify-between px-20 py-3 bg-black w-[900px] max-w-[900px] slg:w-full sm:px-10'>
                <span className='text-lg font-semibold text-white'>To Pay</span>
                <button className='font-lg font-semibold'><Link className="px-4 cursor-text text-white font-semibold rounded-lg"><FontAwesomeIcon icon={faRupeeSign} />  {Math.trunc(TotalPrice)}
                </Link></button>
            </div>
        </div>
    </Link> : ''}
        <div className="max-w-[900px] m-auto p-6 my-3 rounded-xl shadow-md pb-10 mt-6  slg:mx-6">

            

            {(cartItems.length == 0) ?

                <div className="font-semibold text-lg text-center">
                    <div className="flex justify-center">
                        <img src={cartImg} className="max-w-[600px] w-full" />
                    </div>
                    <h1 className="text-3xl font-semibold sm:text-2xl xsm:text-xl">Your Cart is Empty</h1>
                    <h1 className="mb-7 mt-2 text-lg font-normal sm:text-base xsm:text-xs xsm:font-medium">There's nothing in your cart yet. Why not check out our menu for something that catches your interest?</h1>
                    <Link to="/restaurants" className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg xsm:text-sm">Add Dishes</Link>
                </div>

                :

                <div>
                   
                    <div className="flex gap-4 items-start border-b-2 border-gray-300 pb-3">
                        
                        <div className="w-12 h-12 rounded-lg">
                            <img src={ResImg} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold w-[500px] text-ellipsis overflow-hidden whitespace-nowrap ssm:w-[280px] sm:text-lg xsm:text-sm xsm:w-[160px]">{ResName}</h2>
                            <h2 className="text-sm font-medium mt-0.5 text-gray-500 sm:text-xs">{ResArea}</h2>
                        </div>
                    </div>
                    {/* Item Container */}
                    <div className="my-3 mx-2">

                        {cartItems.map((item, index) => (
                            <Dish menu={item.menu} key={index} ResID={ResID} input={'cart'} />
                        ))}
                    </div>
                </div>}


        </div>
        </>
    );
};

export default Cart;