import {
    faUtensils,
    faAddressCard,
    faShoppingCart,
    faBars,
    faXmark,
    faWallet,
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useSelector } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import logo from "../images/logo.png";
  
  const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    const [navStatus, setNavStatus] = useState(false);
  
    const toggleMenu = () => setNavStatus(!navStatus);

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      window.location.href = '/auth/in';
      toast.success('Logged out successfully!');
    };
  
    return (
      <div className="flex items-center justify-between bg-[#fafafa] px-10 py-1 shadow sticky top-0 z-50 max-w-[1580] m-auto sm:flex-col sm:px-2 box-border slg:py-3 sm:py-1">
        <div className="top-nav flex justify-between items-center sm:w-full sm:py-2 sm:px-5">
          <Link to="/">
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                className="w-[180px] mix-blend-multiply  slg:w-[120px]"
              />
            </div>
          </Link>
          <div
            className="hidden sm:block px-2.5 py-2 shadow-sm w-10 h-10 rounded-[50%] cursor-pointer hover:bg-[#e9e9e9]"
            onClick={toggleMenu}
          >
            {/* Conditional rendering of menu icon */}
            {navStatus ? (
              <FontAwesomeIcon
                className="h-7 sm:h-6"
                icon={faXmark}
                style={{ color: "#ff8000" }}
              />
            ) : (
              <FontAwesomeIcon
                className="h-7 sm:h-6"
                icon={faBars}
                style={{ color: "#ff8000" }}
              />
            )}
          </div>
        </div>
  
        {/* Navigation menu */}
        <div
          className={`${
            navStatus ? "sm:block" : "sm:hidden"
          } block sm:absolute top-16 sm:py-5 sm:mt-[0px] sm:bg-white sm:w-full sm:border-b-2 sm:border-slate-100`}
        >
          <ul className="flex items-center gap-6 capitalize slg:text-sm sm:flex-col sm:items-center">
            <li>
              <Link
                to="/wallet"
                className="px-4 py-1.5 bg-orange-400 text-white font-semibold rounded-lg"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faWallet} style={{ color: "#ffffff" }} />{" "}
                Wallet
              </Link>
            </li>
  
            <li>
              <Link
                to="/restaurants"
                className="px-4 py-1.5 bg-orange-400 text-white font-semibold rounded-lg"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faUtensils} style={{ color: "#ffffff" }} />{" "}
                Restaurants
              </Link>
            </li>
  
            <li>
              <Link
                to="/about"
                className="px-4 py-1.5 bg-orange-400 text-white font-semibold rounded-lg"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ color: "#ffffff" }}
                />{" "}
                About Us
              </Link>
            </li>
  
            <li className="font-lg font-semibold">
              <Link
                to="/cart"
                className="px-4 py-1.5 bg-orange-400 text-white font-semibold rounded-lg"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ color: "#ffffff" }}
                />{" "}
                Cart ({cartItems.length})
              </Link>
            </li>
  
            {/* Logout button */}
            <li className="font-lg font-semibold">
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 bg-red-600 text-white font-semibold rounded-lg"
              >
                <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#ffffff" }} />{" "}
                
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  