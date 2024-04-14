import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    return (
        <div className="flex items-center justify-between bg-[#fafafa] border-b-2 border-black px-10 py-3">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" className="w-16 mix-blend-multiply"/>
            </div>
            <div className="nav-items">
                <ul className="flex gap-6">
                    <li>Status : {(useOnlineStatus())? 'Online 🟢' : 'Offline 🔴'}</li>
                    <li><Link to="/" className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">Home</Link></li>
                    <li><Link to="/about"  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">About Us</Link></li>
                    <li><Link to="/contact" className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;