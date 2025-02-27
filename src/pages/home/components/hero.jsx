import React from "react";
import Button from "../../../components/button";
import img1 from "../../../assets/hero_img1.png";
import img2 from "../../../assets/hero_img2.png";
import img3 from "../../../assets/hero_img3.png";

const HeroInfoTitle = ({ title, info, className }) => {
  return (
    <>
      <div
        className={`px-[32px] border-r-2 border-r-[#dad8d9] border-solid ${className}`}
      >
        <h2 className="font-bold text-[40px] text-primary ">{title}</h2>
        <p>{info}</p>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="container relative flex items-center justify-between">
        <div className="pt-[103px]  pb-[116px]">
          <h1 className="max-w-[577px] mb-[32px] text-[64px]/[100%] font-[700]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="max-w-[545px] mb-[32px] text-[16px]/[116%]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="mb-[48px]">Shop Now</Button>

          <div className="flex">
            <HeroInfoTitle title={"200+"} info={"International Brands"} />
            <HeroInfoTitle title={"2,000+"} info={"High-Quality Products"} />
            <HeroInfoTitle
              title={"30,000+"}
              info={"Happy Customers"}
              className={"border-none"}
            />
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <img className="absolute w-[56px] h-[56px] top-[50%] mt-[-28px]" src={img2} alt="img" />
          <img className="absolute w-[110px] h-[110px] top-[10%] right-0" src={img3} alt="img" />
          <img className="w-[600px]" src={img1} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
