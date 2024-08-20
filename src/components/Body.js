import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { Link  } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

       
const Body = () => {

    const [searchText, setSearchText] = useState("");

    const [originalList, setOriginalList] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        //optinonal chaining => 
        // Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to manually check if each level exists. If any part of the chain is null or undefined, the entire expression will return undefined instead of throwing an error.
        setOriginalList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return(<h1>
            Looks like you are offline!!!!
        </h1>);

   
   //Conditional rendering (ternary operator)
    return originalList.length === 0 ? (
    <Shimmer/>) :
     (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="seacrh-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                   <button
                      onClick={() => {
                     // Filter the restaurant cards and update the UI
                     const filteredRestaurant = originalList.filter((res) =>
                     res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                     setFilteredRestaurant(filteredRestaurant);
                     }}>
                     Search
                   </button>

                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = originalList.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRestaurant(filteredList);
                    console.log(originalList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {filteredRestaurant.map((restaurant) => (
                <Link key= {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}
                >
                <RestaurantCard  resData = {restaurant}/>
                </Link>
            ))} 
            </div>
        </div>
    );
};

export default Body;