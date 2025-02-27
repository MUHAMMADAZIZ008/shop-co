import React from "react";
import { FaHeart } from "react-icons/fa";

const CommentCart = ({ item }) => {
  return (
    <div className="relative pt-[35px] pb-[10px] px-[32px] rounded-[20px] border border-[#f2f2f2] h-[240px]">
      <div className=" absolute flex flex-col gap-[2px] justify-center items-center top-[15px] right-[15px]">
        <p className="text-red-600">
          <FaHeart />
        </p>
        <p className="text-[12px] text-gray">{item.like}</p>
      </div>
      <h3 className="text-[20px] mb-[16px] font-extrabold text-primary">{item.username}</h3>
      <p className="text-[16px]/[137%]">{item.message}</p>
    </div>
  );
};

export default CommentCart;
