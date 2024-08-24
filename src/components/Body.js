import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log(originalList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setOriginalList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1 className="text-center text-2xl font-bold mt-10">Looks like you are offline!!!!</h1>;
  }

  return originalList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body container mx-auto px-4 py-6">
      <div className="filter flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="search flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
          <input
            type="text"
            className="search-box border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 mt-2 md:mt-0"
            onClick={() => {
              const filteredRestaurant = originalList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          onClick={() => {
            const filteredList = originalList.filter((res) => res.info.avgRating > 4.5);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
