import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-3 p-4 w-[255px] rounded-lg"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-4 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4 className="font-medium">User: {loggedInUser} </h4>
    </div>
  );
};

export const withOpenLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 m-2 text-white bg-black rounded-md left-2">
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
