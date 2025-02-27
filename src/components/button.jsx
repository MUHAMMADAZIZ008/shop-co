import React from "react";

export default function Button({ children, type, onClick, variant = "primary", className = "" }) {
  const baseStyles = "px-[67px] py-[15px] rounded-[62px] font-medium";
  
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-primary px-[88px]",
    danger: "bg-red-500 text-white",
    outline: "border border-light-grey px-[80px] bg-white",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
