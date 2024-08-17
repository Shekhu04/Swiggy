import RestaurantCard from "./RestaurantCard";

import { useState,useEffect } from "react";

       
const Body = () => {

    const [list, setList] = useState([]);

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        //optinonal chaining => 
        // Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to manually check if each level exists. If any part of the chain is null or undefined, the entire expression will return undefined instead of throwing an error.
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = list.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setList(filteredList);
                    console.log(list);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {list.map((restaurant) => (<RestaurantCard  key= {restaurant.info.id} resData = {restaurant}/>
            ))} 
            </div>
        </div>
    );
};

export default Body;