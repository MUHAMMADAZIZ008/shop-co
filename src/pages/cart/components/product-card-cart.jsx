import React from "react";
import deleteIcon from "../../../assets/svg/delete-icon.svg";
import minusIcon from "../../../assets/svg/minus-icon.svg";
import plusIcon from "../../../assets/svg/plus-icon.svg";
import {
  productIncrement,
  productDecrement,
  deleteProduct,
} from "../../../store/slices/addToCart";
import { useDispatch } from "react-redux";

const ProductCardCart = ({ item }) => {
  const despatch = useDispatch();

  const decrement = () => {
    if (item.viewCount > 1) {
      despatch(productDecrement({ id: item.id }));
    }
  };
  const increment = () => {
    if (item.count > 0) despatch(productIncrement({ id: item.id }));
  };

  const deleteProductButton = () => {
    despatch(deleteProduct({ id: item.id }));
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-[16px]">
        <div className="w-full h-[124px] rounded-[9px] overflow-hidden">
          <img src={item.img} className="w-full h-full " alt="product img" />
        </div>
        <div className="col-span-4 flex justify-between">
          <div>
            <h3 className="text-[20px] mb-[10px] font-extrabold text-primary">
              {item.name}
            </h3>
            <p className="text-[14px] text-primary">
              Size: <span className="text-gray">{item.selectedSize}</span>
            </p>
            <p className="text-[14px] text-primary">
              Color:{" "}
              <span className="text-gray mb-[15px]">{item.selectedColor}</span>
            </p>
            <div className="flex items-center gap-[15px]">
              <p className="font-extrabold text-[24px] text-primary">
                Original price: ${item.price}
              </p>
              {/* <p className="font-extrabold text-[24px] text-primary">Currently price: ${item.viewPrice}</p> */}
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <button onClick={deleteProductButton}>
              <img src={deleteIcon} alt="icon" />
            </button>

            <div className="flex items-center h-[52px]">
              <button
                onClick={decrement}
                className="text-primary flex items-center justify-baseline h-full pl-[20px] bg-light-grey rounded-tl-[62px] rounded-bl-[62px]"
              >
                <img src={minusIcon} alt="" />
              </button>
              <p className="h-full px-[38px] flex items-center justify-baseline text-[18px] font-semibold bg-light-grey">
                {item.viewCount}
              </p>
              <button
                onClick={increment}
                className="text-primary flex items-center justify-baseline h-full pr-[20px] bg-light-grey rounded-tr-[62px] rounded-br-[62px]"
              >
                <img src={plusIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
