import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul  className="flex p-4 m-4">
          <li className="px-4">
            Online Status :{onlineStatus?"🟢":"🔴"}
          </li>
            
          <li className="px-4">
            <Link to="/" className="link-style">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="link-style">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="link-style">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="link-style">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
