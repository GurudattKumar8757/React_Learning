import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);
  
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


  return (
    <div className="text-center ">
      <h1 className="my-6 text-2xl font-bold">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index)=>
      <div key={index}>
        <RestaurantCategory data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/>
        </div>
      )}
      
    </div>
  );
};

export default RestaurantMenu;
