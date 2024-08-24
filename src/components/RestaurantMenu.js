import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function RestaurantMenu() {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [openSection, setOpenSection] = useState(null); // State for accordion

    const dispatch = useDispatch(); // Correct invocation of useDispatch

    // If resInfo is still loading, display the Shimmer component
    if (resInfo === null) return <Shimmer />;

    // Safely access the nested properties
    const restaurantDetails = resInfo?.cards?.[0]?.card?.card || {};
    const menuInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    // Handle section toggle for accordion
    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    // Function to handle adding items to the cart
    const handleAddItem = (item) => {
        console.log('Adding item to cart:', item); // Log the item being added
        // Dispatch an action with the item details
        dispatch(addItem(item));
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            {/* Restaurant Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{restaurantDetails.text}</h1>
                <p className="text-gray-600 text-sm">
                    {menuInfo.cuisines?.join(", ") || "Cuisines not available"} - {menuInfo.costForTwoMessage}
                </p>
            </div>

            {/* Menu Section */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
                <ul className="space-y-4">
                    {itemCards.length > 0 ? (
                        itemCards.map((item, index) => (
                            <li
                                key={item.card.info.id}
                                className="bg-white p-4 rounded-lg shadow-md"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleSection(index)}
                                >
                                    <span className="text-gray-700 font-medium">{item.card.info.name}</span>
                                    <span className="text-gray-600 font-semibold">
                                        Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                    </span>
                                </div>

                                {/* Accordion content (Image + Description + Add Button) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openSection === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                                >
                                    <div className="mt-4 flex items-center">
                                        {item.card.info.imageId && (
                                            <img
                                                className="w-20 h-20 object-cover rounded-lg mr-4"
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                                                alt={item.card.info.name}
                                            />
                                        )}
                                        <p className="text-gray-600">
                                            {item.card.info.description || "No description available."}
                                        </p>
                                    </div>
                                    {/* Add Button */}
                                    <button
                                        onClick={() => handleAddItem(item.card.info)} // Dispatch action with item details
                                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No menu items available.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;
