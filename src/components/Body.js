import ResturantCard,{withOpenLabel} from "./ResturantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const ResturantCardOpen = withOpenLabel(ResturantCard);
  const onlineStatus = useOnlineStatus();

  if(onlineStatus=== false){
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    )
  }

  const {loggedInUser,setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-black border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-1 m-4 bg-green-100 border border-gray-300 border-solid rounded-lg"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center p-4 m-4"> 
          <button
          className="px-4 py-1 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        </div>
        <div className="flex items-center p-4 m-4"> 
        <label>Username :</label>
          <input className="p-1 ml-2 border border-black" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="link-style"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen?(<ResturantCardOpen resData={restaurant}/>):<ResturantCard resData={restaurant}/>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
