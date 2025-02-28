import React from "react";

const ProductColor = ({ color,  id}) => {

  return (
    <button
      className="w-[37px] h-[37px] rounded-full"
      style={{ backgroundColor: color }}
    ></button>
  );
};

export default ProductColor;
