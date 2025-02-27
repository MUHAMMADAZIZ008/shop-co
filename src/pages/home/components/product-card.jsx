import React from "react";
import Rating from "./rating";

const ProductCard = ({ item }) => {
  return (
    <div className="w-[295px]">
      <div className="rounded-[20px] mb-[16px] overflow-hidden w-full">
        <img className="w-full" src={item.img} alt="cart img" />
      </div>
      <h3 className="text-[20px] font-bold mb-[8px]">{item.name}</h3>
      <div className="flex items-center gap-[13px] mb-[8px]">
        <Rating initialRating={item.rating} />
        <p className="text-primary">
          {item.rating} <span className="text-gray">/5</span>
        </p>
      </div>
      <div className="flex text-primary items-center gap-[10px]">
        <p className="font-bold text-[24px]">${item.price}</p>
        {item.discount ? <div className="flex items-center gap-[10px]">
          <p className="font-bold text-[24px] line-through text-gray">${item.oldPrice}</p>
          <span className="px-[14px] py-[7px] bg-pink rounded-[62px] text-danger text-[12px]">{item.discount}</span>
        </div> : ""}
      </div>
    </div>
  );
};

export default ProductCard;
