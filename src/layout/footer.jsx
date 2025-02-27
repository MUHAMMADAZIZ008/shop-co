import React from "react";
import Button from "../components/button";

import logo from "../assets/logo.svg";
import Twitter from "../assets/components/twitter";
import Facebook from "../assets/components/facebook";
import Instagram from "../assets/components/instagram";
import Github from "../assets/components/github";
import { footerData } from "./data";
import FooterList from "./components/footer-list";
import FooterImg1 from "../assets/footer_img1.png";

export const Footer = () => {
  const submit = (e) => {
    e.privateDefault();
  };
  return (
    <footer className="bg-[#f0f0f0]">
      <div className="container relative pt-[140px] pb-[88px]">
        <div className=" bg-primary w-[100%] rounded-[20px] flex items-center justify-between py-[36px] px-[64px] absolute top-0 transform -translate-y-1/2">
          <h2 className="text-white max-w-[551px] text-[40px] font-extrabold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form onSubmit={submit} className="flex flex-col gap-[14px]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-white py-[13px] rounded-[62px] pl-[62px] pr-[5px] footer__input"
            />
            <Button className="px-[0px]" variant="outline">
              Subscribe/ to Newsletter
            </Button>
          </form>
        </div>
        <div className="flex items-start gap-[113px] pb-[50px] border-b-2 border-b-gray">
          <div>
            <a href="#" className="mb-[25px] inline-block">
              <img src={logo} alt="" />
            </a>
            <p className="text-[14px]/[157%] max-w-[248px] text-gray mb-[35px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-[12px]">
              <a href="#" className="text-white">
                <Twitter />
              </a>
              <a href="#" className="text-white">
                <Facebook />
              </a>
              <a href="#" className="text-white">
                <Instagram />
              </a>
              <a href="#" className="text-white">
                <Github />
              </a>
            </div>
          </div>
          <div className="flex items-start grow justify-between">
            {footerData.map((item) => (
              <FooterList key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between py-[20px]">
          <p className="">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex items-center gap'">
            <a href="#">
              <img src={FooterImg1} alt="" />
            </a>
            <a href="#">
              <img src={FooterImg1} alt="" />
            </a>
            <a href="#">
              <img src={FooterImg1} alt="" />
            </a>
            <a href="#">
              <img src={FooterImg1} alt="" />
            </a>
            <a href="#">
              <img src={FooterImg1} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
