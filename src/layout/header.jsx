import React from "react";
import { Search } from "./components/search";
import { Link } from "react-router-dom";
import BasketIcon from "../assets/svg/basket-icon.svg";
import ProfileIcon from "../assets/svg/profile-icon.svg";
import SearchIcon from "../assets/svg/search-icon2.svg";

export const Header = () => {
  return (
    <div>
      <div className="bg-primary p-[10px] text-center">
        <p className="text-white text-[14px]">
          Sign up and get 20% off to your first order. Sign Up Now
        </p>
      </div>
      <div className="container flex gap-[40px] py-[24px]">
        <div className="grow">
          <Search />
        </div>
        <div className="flex items-center gap-[14px]">
          {/* <Link to={"/"}>
            <img src={SearchIcon} alt="" />
          </Link> */}
          <Link to={"/"}>
            <img src={BasketIcon} alt="" />
          </Link>
          <Link to={"/"}>
            <img src={ProfileIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
