import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable

  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  /**
   * Array Destructring
   *
   * const arr = useState(resList);
   * const [listOfRestaurants, setListOfRestaurant] = arr;
   * or const listOfRestaurants = arr[0];
   *    const setListOfRestaurant = arr[1];
   */

  //Normal JS Variable
  // let listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "132460",
  //       name: "KFC",
  //       cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
  //       cuisines: ["South Indian", "Biryani", "North Indian"],
  //       costForTwo: 20000,
  //       deliveryTime: 25,
  //       avgRating: "3.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "132461",
  //       name: "Dominos",
  //       cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
  //       cuisines: ["South Indian", "Biryani", "North Indian"],
  //       costForTwo: 20000,
  //       deliveryTime: 25,
  //       avgRating: "4.2",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "132462",
  //       name: "MCD",
  //       cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
  //       cuisines: ["South Indian", "Biryani", "North Indian"],
  //       costForTwo: 20000,
  //       deliveryTime: 25,
  //       avgRating: "4.5",
  //     },
  //   },
  // ];

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResturantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
