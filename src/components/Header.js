import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
  
    const {loggedInUser} = useContext(UserContext);
  
    // Subscribe to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
  
    return (
      <header className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo Section */}
          <div className="logo-container transform hover:scale-110 transition-transform duration-300">
            <Link to="/">
              <img className="w-16 h-16 md:w-20 md:h-20 rounded-full" src={LOGO_URL} alt="Logo" />
            </Link>
          </div>
  
          {/* Navigation Links */}
          <nav className="nav-items">
            <ul className="flex space-x-4 md:space-x-6 text-gray-700 font-semibold tracking-wide">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 hover:underline decoration-wavy decoration-blue-500 hover:scale-110 transition-transform duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-blue-500 hover:underline decoration-wavy decoration-blue-500 hover:scale-110 transition-transform duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="hover:text-blue-500 hover:underline decoration-wavy decoration-blue-500 hover:scale-110 transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Grocery"
                  className="hover:text-blue-500 hover:underline decoration-wavy decoration-blue-500 hover:scale-110 transition-transform duration-300"
                >
                  Grocery
                </Link>
              </li>
              <li>
                <Link
                  to="/Cart"
                  className="hover:text-blue-500 hover:underline decoration-wavy decoration-blue-500 hover:scale-110 transition-transform duration-300"
                >
                  Cart - ({cartItems.length} items)
                </Link>
              </li>
            </ul>
          </nav>
  
          {/* Login/Logout Button */}
          <button
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            onClick={() => {
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
  
          <li className="px-4 font-bold text-gray-800">{loggedInUser}</li>
        </div>
      </header>
    );
  };
  
  export default Header;
  