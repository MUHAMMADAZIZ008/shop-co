import React from "react";

const ChooseSize = ({ size, id, selectedSize, onSelect }) => {
  return (
    <label
      htmlFor={`size-${id}`}
      className={`py-[12px] px-[24px] rounded-[62px] cursor-pointer transition-colors 
        ${
          selectedSize === size
            ? "bg-black text-white"
            : "bg-light-grey text-[#606060]"
        }`}
    >
      {size}
      <input
        type="radio"
        name="ProductSize"
        id={`size-${id}`}
        value={size}
        className="hidden"
        onChange={() => onSelect(size)}
      />
    </label>
  );
};

export default ChooseSize;
