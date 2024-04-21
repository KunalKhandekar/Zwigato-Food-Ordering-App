import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartImg from '../images/EmptyCart.webp'
import Dish from "./Dish";
import ResImg from '../images/ResImg.png';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const TotalPrice = useSelector((store) => store.cart.TotalPrice);
    const ResID = useSelector((store) => store.cart.RestaurantID);
    const ResName = useSelector((store) => store.cart.RestaurantName);
    const ResArea = useSelector((store) => store.cart.RestaurantArea);
    const deliveryCharges = Math.trunc((TotalPrice / 100) * 1.25);
    const platformFees = Math.trunc((TotalPrice / 100) * 0.25);
    const GST_Charges = Math.trunc((TotalPrice / 100) * 14.5);
    const payingPrice = Math.trunc(TotalPrice + deliveryCharges + platformFees + GST_Charges);

    return (
        <>
            {(cartItems.length >= 1) ? <Link to='/cart'>
                <div className='max-w-[900px] m-auto'>
                    <div className='fixed bottom-0 z-20 flex justify-between px-20 py-3 bg-orange-400 w-[900px] max-w-[900px] slg:w-full sm:px-10'>
                        <span className='text-lg font-semibold text-white uppercase'>To Pay</span>
                        <button className='font-lg font-semibold'><Link className="px-4 cursor-text text-white font-semibold rounded-lg">&#8377;{payingPrice}
                        </Link></button>
                    </div>
                </div>
            </Link> : ''}
            <div className="max-w-[900px] m-auto p-6 my-3 rounded-xl shadow-md pb-5 mt-6 slg:mx-6">



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

                            <Link to={`/restaurants/${ResID}`}>
                        <div className="flex gap-4 items-start border-b-2 border-gray-300 pb-3">

                            <div className="w-12 h-12 rounded-lg">
                                <img src={ResImg} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold w-[500px] text-ellipsis overflow-hidden whitespace-nowrap ssm:w-[280px] sm:text-lg xsm:text-sm xsm:w-[160px]">{ResName}</h2>
                                <h2 className="text-sm font-medium mt-0.5 text-gray-500 sm:text-xs">{ResArea}</h2>
                            </div>
                        </div>
                            </Link>
                        {/* Item Container */}
                        <div className="my-3 mx-2">

                            {cartItems.map((item, index) => (
                                <Dish menu={item.menu} key={index} ResID={ResID} input={'cart'} />
                            ))}
                        </div>
                    </div>}


            </div>

            {cartItems.length >= 1 ?
                <div className="max-w-[900px] m-auto p-6 rounded-xl shadow-md pb-5 mt-6 mb-20 text-lg text-center text-white font-semibold bg-black slg:mx-6 sm:text-sm xsm:text-xs">
                    <h2 className="pb-[4px] border-b-2 border-[#353535] w-full">Bill Details</h2>

                    <div className="border-b-2 border-[#353535] py-1">
                        {cartItems.map((item) => (
                            <div className="flex justify-between w-full px-2 ">
                                <h2>{item.menu.card.info.name+ ' x ' + item.count}</h2>
                                <h2>&#8377;{Math.trunc((item.menu.card.info.defaultPrice / 100)*item.count) || Math.trunc((item.menu.card.info.price / 100)*item.count)}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="py-[3px] w-full">
                        <div className="flex justify-between w-full px-2">
                            <h2>Total</h2>
                            <h2>&#8377;{Math.trunc(TotalPrice)}</h2>
                        </div>
                    </div>
                    <div className="py-[3px] border-b-2 border-[#353535] w-full">
                        <div className="flex justify-between w-full px-2">
                            <h2>Platform Fees</h2>
                            <h2>&#8377;{platformFees}</h2>
                        </div>
                        <div className="flex justify-between w-full px-2">
                            <h2>Delivery Charges</h2>
                            <h2>&#8377;{deliveryCharges}</h2>
                        </div>
                        <div className="flex justify-between w-full px-2">
                            <h2>14% GST Charges</h2>
                            <h2>&#8377;{GST_Charges}</h2>
                        </div>
                    </div>
                    <div className="py-[3px] w-full">
                        <div className="flex justify-between w-full px-2">
                            <h2>Total Price</h2>
                            <h2>&#8377;{payingPrice}</h2>
                        </div>
                    </div>

                </div>
                : ''}
        </>
    );
};

export default Cart;