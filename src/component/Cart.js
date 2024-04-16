import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/Redux/cartSlice";
import Dish from "./Dish";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const claerTheCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="w-6/12 m-auto p-6 my-3 rounded-xl shadow-md">

            <h1 className="text-center text-2xl font-bold mb-4">Cart Details</h1>

            {(cartItems.length == 0) ?

                <div className="font-semibold text-lg text-center">
                    <h1>Your Cart is Empty !!</h1>
                    <h1 className="mb-4">ADD Items to Cart</h1>
                    <Link to="/" className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">Home</Link>

                </div>

                :

                <div>
                    <h2 className="px-4 py-2 rounded-lg shadow-sm bg-orange-500 text-white text-center cursor-pointer inline" onClick={claerTheCart}>Clear Cart</h2>
                    <div>

                        {cartItems.map((items, index) => (
                            <Dish menu={items} key={index} />
                        ))}
                    </div>
                </div>}


        </div>

    );
};

export default Cart;