import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

   //Subscribe to the store using a selector
   const cartItems = useSelector((store) => store.cart.items );

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/">
            <img className="w-20 h-20" src={LOGO_URL} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-items">
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 hover:scale-110 transition-transform duration-300 transform"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:text-blue-500 hover:scale-110 transition-transform duration-300 transform"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="hover:text-blue-500 hover:scale-110 transition-transform duration-300 transform"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/Grocery"
                className="hover:text-blue-500 hover:scale-110 transition-transform duration-300 transform"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/Cart"
                className="hover:text-blue-500 hover:scale-110 transition-transform duration-300 transform"
              >
                Cart - ({cartItems.length} items)
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Logout Button */}
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => {
            setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>

        <li className="px-4 font-bold">{loggedInUser}</li>
      </div>
    </header>
  );
};

export default Header;
