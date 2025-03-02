import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { data } from "../../home/data/data";
import Rating from "../../home/components/rating";
import ProductColor from "./product-color";
import ChooseSize from "./choose-size";
import minusIcon from "../../../assets/svg/minus-icon.svg";
import plusIcon from "../../../assets/svg/plus-icon.svg";
import Button from "../../../components/button";

import { addToCart, productIncrement } from "../../../store/slices/addToCart";

const ProductContent = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    data.map((item) => {
      if (item.id === +id) {
        setProduct(item);
      }
    });
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const addToCartButton = () => {    
    dispatch(addToCart({ ...product, selectedColor, selectedSize }));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-[40px]">
        <div className="grid grid-cols-4 gap-[24px]">
          <div className="grid grid-cols-1 grid-rows-3 gap-[24px]">
            <div className="rounded-[20px] overflow-hidden w-full">
              <img className="w-full h-full" src={product.img} alt="" />
            </div>
            <div className="rounded-[20px] overflow-hidden w-full">
              <img className="w-full h-full" src={product.img} alt="" />
            </div>
            <div className="rounded-[20px] overflow-hidden w-full">
              <img className="w-full h-full" src={product.img} alt="" />
            </div>
          </div>
          <div className="rounded-[20px] overflow-hidden col-span-3">
            <img className="w-full h-full" src={product.img} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-[40px] text-primary mb-[14x] font-extrabold">
            {product.name}
          </h2>
          <div className="flex items-center gap-[13px] mb-[14px]">
            <Rating initialRating={product.rating} />
            <p className="text-primary">
              {product.rating} <span className="text-gray">/5</span>
            </p>
          </div>

          <div className="flex text-primary items-center gap-[10px] mb-[25px]">
            <p className="font-bold text-[24px]">${product.price}</p>
            {product.discount ? (
              <div className="flex items-center gap-[10px]">
                <p className="font-bold text-[24px] line-through text-gray">
                  ${product.oldPrice}
                </p>
                <span className="px-[14px] py-[7px] bg-pink rounded-[62px] text-danger text-[12px]">
                  {product.discount}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="text-[16px]/[167%] text-gray mb-[24px] pb-[24px] border-b-2 border-b-gray">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="mb-[24px] pb-[24px] border-b-2 border-b-gray">
            <p className="mb-[16px] text-gray">Select Colors</p>
            <div className="flex items-center gap-[16px]">
              {product?.colors?.map((item, index) => (
                <ProductColor
                  key={index}
                  color={item}
                  id={index}
                  onChange={setSelectedColor}
                  selectedColor={selectedColor}
                />
              ))}
            </div>
          </div>
          <div className="mb-[24px] pb-[24px] border-b-2 border-b-gray">
            <p className="mb-[16px] text-gray">Choose Size</p>
            <div className="flex items-center gap-[12px]">
              {product?.sizes?.map((item, index) => (
                <ChooseSize
                  key={index}
                  selectedSize={selectedSize}
                  onSelect={setSelectedSize}
                  size={item}
                  id={index}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center h-[52px]">
              <button
                onClick={decrement}
                className="text-primary flex items-center justify-baseline h-full pl-[20px] bg-light-grey rounded-tl-[62px] rounded-bl-[62px]"
              >
                <img src={minusIcon} alt="" />
              </button>
              <p className="h-full px-[38px] flex items-center justify-baseline text-[18px] font-semibold bg-light-grey">
                {count}
              </p>
              <button
                onClick={increment}
                className="text-primary flex items-center justify-baseline h-full pr-[20px] bg-light-grey rounded-tr-[62px] rounded-br-[62px]"
              >
                <img src={plusIcon} alt="" />
              </button>
            </div>
            <Button
              onClick={addToCartButton}
              className="grow"
              variant="primary"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
