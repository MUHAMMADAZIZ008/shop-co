import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import HeaderDropdown from "./hearder-dropdown";
export const Search = () => {
  return (
    <div className="flex items-center gap-[40px]">
      <div>
        <img src={logo} alt="img" />
      </div>
      {/* md:flex md:items-center md:gap-10 */}

      <div className="flex items-center gap-10 grow">
        <div className="flex gap-[24px]">
          <HeaderDropdown />
          {/* <Link to={"/"}>Shop</Link> */}
          <Link to={"/"}>On Sale</Link>
          <Link to={"/"}>New Arrivals</Link>
          <Link to={"/"}>Brands</Link>
        </div>
        <div className="grow bg">
          <input
            placeholder="Search for products..."
            className="search__input pl-[52px] w-full bg-light-grey py-[13px] rounded-[62px]"
          />
        </div>
      </div>
    </div>
  );
};
