import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // If resInfo is still loading, display the Shimmer component
    if (resInfo === null) return <Shimmer />;

    // Safely access the nested properties
    const restaurantDetails = resInfo?.cards?.[0]?.card?.card || {};
    const menuInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

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
                        itemCards.map((item) => (
                            <li
                                key={item.card.info.id}
                                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <span className="text-gray-700 font-medium">{item.card.info.name}</span>
                                <span className="text-gray-600 font-semibold">
                                    Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                </span>
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
