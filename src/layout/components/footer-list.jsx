import React from "react";

const FooterList = ({ item }) => {
  return (
    <ul className="flex flex-col gap-[26px]">
      <li>
        <h3 className="text-[18px] uppercase m-0">{item.title}</h3>
      </li>
      <li className="flex flex-col gap-[22px] ">
        {item.links.map((item) => (
            <li>
                <a className="text-gray dec" href={item.link}>{item.text}</a>
            </li>
      ))}</li>
    </ul>
  );
};

export default FooterList;
