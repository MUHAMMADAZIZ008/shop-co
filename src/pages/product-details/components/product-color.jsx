import React from "react";
import selectedIcon from "../../../assets/svg/selected-icon.svg";

const ProductColor = ({ color, id, selectedColor, onChange }) => {
  return (
    <div>
      <label
        htmlFor={`color-${id}`}
        className={`w-[37px] h-[37px] cursor-pointer rounded-full flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {color === selectedColor && <img src={selectedIcon} alt="Selected" />}
      </label>
      <input
        name="ProductColor"
        id={`color-${id}`}
        type="radio"
        className="hidden"
        onChange={() => onChange(color)}
      />
    </div>
  );
};

export default ProductColor;
