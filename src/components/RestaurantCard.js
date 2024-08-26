import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);

  // Optional Chaining
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    // deliveryTime,
  } = resData.info;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Restaurant Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 mt-1">
          {cuisines.join(", ")}
        </h4>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-bold text-green-600">{avgRating} ⭐</span>
          {/* Optional Delivery Time */}
          {/* <span className="text-sm text-gray-500">{deliveryTime} min</span> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
