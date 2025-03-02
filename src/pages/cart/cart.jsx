import React from "react";
import { useSelector } from "react-redux";
import ProductCardCart from "./components/product-card-cart";
import Button from "../../components/button";

const Cart = () => {
  const { productCount, deliveryFee, products, discount, total, subTotal } =
    useSelector((state) => state.product);

  return (
    <section className="pt-[70px] pb-[200px]">
      <div className="container">
        <h2 className="text-primary font-extrabold text-[40px] mb-[24px]">
          Your cart
        </h2>
        <div className="grid grid-cols-5 gap-[20px]">
          {products.length ? (
            <div className="col-span-3 border border-gray rounded-[20px] py-[20px] px-[24px]">
              {products.map((item, index) => (
                <div
                  className={`${
                    index !== products.length - 1
                      ? "border-b-2 border-b-light-grey mb-[24px] pb-[24px]"
                      : ""
                  }`}
                >
                  <ProductCardCart key={item.id} item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-3"></div>
          )}
          <div className="col-span-2 border border-gray rounded-[20px] py-[20px] px-[24px]">
            <h3 className="font-bold text-[24px] text-primary mb-[24px]">
              Order Summary
            </h3>
            <div className="flex items-center justify-between mb-[20px]">
              <p className="text-[20px] text-gray">Subtotal</p>
              <p className="text-[20px] text-primary font-bold">${subTotal}</p>
            </div>
            <div className="flex items-center justify-between mb-[20px]">
              <p className="text-[20px] text-gray">Discount (-20%)</p>
              <p className="text-[20px] text-red-500 font-bold">-${discount}</p>
            </div>
            <div className="flex items-center justify-between mb-[20px] pb-[20px] border-b-2 border-b-light-grey">
              <p className="text-[20px] text-gray">Delivery Fee</p>
              <p className="text-[20px] text-primary font-bold">
                ${deliveryFee}
              </p>
            </div>
            <div className="flex items-center justify-between mb-[20px]">
              <p className="text-[20px] text-gray">Total</p>
              <p className="text-[20px] text-primary font-bold">${total}</p>
            </div>
            <form className="flex gap-[12px] mb-[24px]">
              <input className="w-full py-[13px] rounded-[62px] pl-[52px] pr-[10px] bg-light-grey" type="text" placeholder="Add promo code"/>
              <Button variant="primary" className="px-[38px]">Apply</Button>
            </form>
            <Button className="w-full">Go to Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
