import React from "react";
import Hero from "./components/hero";
import versace from "../../assets/versace.png";
import zara from "../../assets/zara.png";
import gucci from "../../assets/gucci.png";
import prada from "../../assets/prada.png";
import calvin from "../../assets/calvin.png";
import ProductSection from "./components/product-section";
import { data } from "./data/data";

import { CostumersComment } from "./components/costumers-comment";

const data1 = [];
const data2 = [];

data.map((item) => {
  if (item.id <= 4) {
    data1.push(item);
  } else {
    data2.push(item);
  }
});

export const Home = () => {
  return (
    <div>
      <main>
        <Hero />
        <section className="bg-primary py-[44px]">
          <div className="container flex gap-[106px] items-center">
            <div className="">
              <img className="w-full" src={versace} alt="" />
            </div>
            <div>
              <img className="w-full" src={zara} alt="" />
            </div>
            <div>
              <img className="w-full" src={gucci} alt="" />
            </div>
            <div>
              <img className="w-full" src={prada} alt="" />
            </div>
            <div>
              <img className="w-full" src={calvin} alt="" />
            </div>
          </div>
        </section>
        <section>
          <ProductSection
            key={"section1"}
            className={"border-b border-b-[#999]]"}
            title={"NEW ARRIVALS"}
            data={data1}
          />
          <ProductSection key={"section1"} title={"TOP SELLING"} data={data2} />
        </section>
        <section>
          <div className="container py-[73px] bg-[#f0f0f0] rounded-[40px]">
            <h2 className="text-[48px] text-primary font-extrabold mb-[64px] text-center">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid grid-cols-3 grid-rows-[289px_289px] gap-[20px]">
              <div className="bg-white style_box overflow-hidden relative rounded-[20px] pt-[25px] pl-[36px]">
                <h3 className="text-primary text-[36px] z-10 font-extrabold">
                  Casual
                </h3>
                {/* <img className="absolute top-0 right-0 z-0 h-[100%]" src={styleImg1} alt="img" /> */}
              </div>
              <div className="bg-white style_box overflow-hidden relative rounded-[20px] col-span-2 pt-[25px] pl-[36px]">
                <h3 className="text-primary text-[36px] z-10 font-extrabold">
                  Formal
                </h3>
                {/* <img className="absolute top-0 right-0 z-0 h-[100%]" src={styleImg2} alt="img" /> */}
              </div>
              <div className="bg-white style_box overflow-hidden relative rounded-[20px] col-span-2 pt-[25px] pl-[36px]">
                <h3 className="text-primary text-[36px] z-10 font-extrabold">
                  Party
                </h3>
                {/* <img className="absolute top-0 right-0 z-0 h-[100%]" src={styleImg3} alt="img" /> */}
              </div>
              <div className="bg-white style_box overflow-hidden relative rounded-[20px] pt-[25px] pl-[36px]">
                <h3 className="text-primary text-[36px] z-10 font-extrabold">
                  Gym
                </h3>
                {/* <img className="absolute top-0 right-0 z-0 h-[100%]" src={styleImg4} alt="img" /> */}
              </div>
            </div>
          </div>
        </section>
        <CostumersComment />
      </main>
    </div>
  );
};
