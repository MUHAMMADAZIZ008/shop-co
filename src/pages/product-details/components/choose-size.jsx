import React from "react";

const ChooseSize = ({ size, id }) => {
  const onFocus = (e) => {
  }
  return (
    <div>
      <label
        htmlFor={id + 'a'}
        className="py-[12px] px-[24px] bg-light-grey rounded-[62px] text-[#606060] cursor-pointer"
      >
        {size}
      </label>
      <input 
        name="ProductSize"
        id={id + 'a'}
        className=""
        type="radio"
        value={size}
        onFocus={onFocus} 
      />
    </div>
  );
};

export default ChooseSize;
