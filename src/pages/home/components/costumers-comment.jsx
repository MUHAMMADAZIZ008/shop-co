import React from "react";
import LeftIcon from "../../../assets/components/left-icon";
import RightIcon from "../../../assets/components/right-icon";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { comments } from "../data/data";
import CommentCart from "./comment-cart";

export const CostumersComment = () => {
  return (
    <>
      <section className="py-[80px]">
        <div className="container">
          <div className="relative style_wrapper">
            <h2 className="text-[48px] font-extrabold mb-[40px]">
              OUR HAPPY CUSTOMERS
            </h2>
            <Swiper
              cssMode={true}
              slidesPerView={3}
              spaceBetween={20}
              navigation={true}
              loop={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {comments.map((item) => (
                <SwiperSlide key={item.id}>
                  <CommentCart item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
