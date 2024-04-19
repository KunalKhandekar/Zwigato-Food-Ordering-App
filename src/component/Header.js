
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faAddressCard, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
// import logo from '../images/logo.png';

// const Header = () => {

//     const cartItems = useSelector((store) => store.cart.items)
//     const [navStatus, setNavStatus] = useState(true);

//     // Define showNavItems function
//     const showNavItems = (navStatus) => {
//         const isSmallScreen = window.innerWidth <= 680; // Adjust the breakpoint as needed
//         if (isSmallScreen) {
//             document.querySelector('.nav-items').style.display = navStatus ? 'block' : 'none';
//             setNavStatus(!navStatus);
//         }
//     }


//     return (
//     <div className="flex items-center justify-between bg-[#fafafa] px-10 py-1 shadow sticky top-0 z-50 max-w-[1580] m-auto sm:flex-col sm:px-2 box-border">
//     <div className="top-nav flex justify-between items-center sm:w-full sm:py-2">
//         <div className="logo">
//             <img src={logo} alt="logo" className="w-[180px] mix-blend-multiply  slg:w-[120px]" />
//         </div>
//         <div className="hidden sm:block  px-2.5 py-2 shadow-inner rounded-[50%] cursor-pointer hover:bg-[#e9e9e9]" onClick={toggleMenu}>
//             <FontAwesomeIcon className="h-7 sm:h-6" icon={faBars} style={{ color: "#ff8000", }} />
//         </div>
//     </div>

//     <div className="nav-items sm:absolute sm:hidden top-16 sm:py-5 sm:mt-[10px] sm:bg-white sm:w-full sm:border-b-2 sm:border-slate-100">
//         <ul className="flex gap-6 capitalize slg:text-sm sm:flex-col sm:items-center">
//             <li className="slg:hidden">Status : {(useOnlineStatus()) ? 'Online 🟢' : 'Offline 🔴'}</li>

//             <li>
//                 <Link to="/" className="px-4 py-1.5 bg-orange-500 text-white font-semibold rounded-lg" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faUtensils} style={{ color: "#ffffff", }} /> Restaurants
//                 </Link>
//             </li>

//             <li>
//                 <Link to="/about" className="px-4 py-1.5 bg-orange-500 text-white font-semibold rounded-lg" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faAddressCard} style={{ color: "#ffffff", }} /> About Us
//                 </Link>
//             </li>

//             <li className="font-lg font-semibold">
//                 <Link to="/cart" className="px-4 py-1.5 bg-orange-500 text-white font-semibold rounded-lg" onClick={toggleMenu}>
//                     <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", }} /> Cart ({cartItems.length})
//                 </Link>
//             </li>
//         </ul>
//     </div>
// </div>
// )
// };

// export default Header;





import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faAddressCard, faShoppingCart, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

const Header = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const [navStatus, setNavStatus] = useState(false);

    const toggleMenu = () => setNavStatus(!navStatus);

    return (
    <div className="flex items-center justify-between bg-[#fafafa] px-10 py-1 shadow sticky top-0 z-50 max-w-[1580] m-auto sm:flex-col sm:px-2 box-border slg:py-3 sm:py-1">
    <div className="top-nav flex justify-between items-center sm:w-full sm:py-2 sm:px-5">
        <div className="logo">
            <img src={logo} alt="logo" className="w-[180px] mix-blend-multiply  slg:w-[120px]" />
        </div>
        <div className="hidden sm:block px-2.5 py-2 shadow-sm w-10 h-10  rounded-[50%] cursor-pointer hover:bg-[#e9e9e9]" onClick={toggleMenu}>
            { navStatus ? <FontAwesomeIcon className="h-7 sm:h-6" icon={faXmark} style={{ color: "#ff8000", }} /> : <FontAwesomeIcon className="h-7 sm:h-6" icon={faBars} style={{color: "#ff8000",}} />}
        </div>
    </div>

    <div className={`${navStatus ? 'sm:block' : 'sm:hidden'} block sm:absolute top-16 sm:py-5 sm:mt-[0px] sm:bg-white sm:w-full sm:border-b-2 sm:border-slate-100`}>
        <ul className="flex gap-6 capitalize slg:text-sm sm:flex-col sm:items-center">
            <li className="slg:hidden">Status : {(useOnlineStatus()) ? 'Online 🟢' : 'Offline 🔴'}</li>

            <li>
                <Link to="/" className="px-4 py-1.5 bg-orange-500 text-white font-semibold rounded-lg" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUtensils} style={{ color: "#ffffff", }} /> Restaurants
                </Link>
            </li>

            <li>
                <Link to="/about" className="px-4 py-1.5 bg-orange-500 text-white font-semibold rounded-lg" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faAddressCard} style={{ color: "#ffffff", }} /> About Us
                </Link>
            </li>

            <li className="font-lg font-semibold">
                <Link to="/cart" className="px-4 py-1.5 bg-orange-500 text-white font-semibold rounded-lg" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", }} /> Cart ({cartItems.length})
                </Link>
            </li>
        </ul>
    </div>
</div>
)
};

export default Header;