import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            const json = await response.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    // If resInfo is still loading, display the Shimmer component
    if (resInfo === null) return <Shimmer />;

    // Safely access the nested properties
    const restaurantDetails = resInfo?.cards?.[0]?.card?.card || {};
    const menuInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    return (
        <div className="menu">
            <h1>{restaurantDetails.text}</h1>
            <p>
                {menuInfo.cuisines?.join(", ") || "Cuisines not available"} - {menuInfo.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."}
                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>
                    ))
                ) : (
                    <p>No menu items available.</p>
                )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
