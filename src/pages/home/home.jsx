import React from "react";
import Hero from "./components/hero";
import versace from '../../assets/versace.png'
import zara from '../../assets/zara.png'
import gucci from '../../assets/gucci.png'
import prada from '../../assets/prada.png'
import calvin from '../../assets/calvin.png'
import ProductSection from "./components/product-section";
import { data } from "./data/data";

const data1 = []
const data2 = []

data.map((item) => {
  if(item.id <= 4) {
    data1.push(item)
  }else {
    data2.push(item)
  }
})

export const Home = () => {
  return <div>
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
        <ProductSection title={'NEW ARRIVALS'} data={data1}/>
        <ProductSection title={'TOP SELLING'} data={data2}/>
      </section>
    </main>
  </div>;
};
