import React from "react";
import { Search } from "./components/search";
import { Link } from "react-router-dom";
import BasketIcon from "../assets/svg/basket-icon.svg";
import ProfileIcon from "../assets/svg/profile-icon.svg";
import SearchIcon from "../assets/svg/search-icon2.svg";
import { useSelector } from "react-redux";

export const Header = () => {
  const {products, productCount} = useSelector((state) => state.product)
  
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
          <Link to={"/cart"} className="relative w-[24px] h-[24px]">
            <p className="absolute -top-[10px] -right-3 w-[20px] h-[20px] text-[11px] flex items-center justify-center text-white bg-red-500 rounded-full">{productCount}</p>
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
