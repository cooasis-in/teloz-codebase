import React from "react";

const Button = ({ children, onClick, size, color, text, border, hover, borcolor, font }) => {
  const buttonSize = size || "w-[137px] h-[59px]";
  const buttonColor = color || "bg-[#F26622]";
  const textColor = text || "text-white";
  const textborder = border || "none";
  const textHover = hover || "hover:bg-[#e65b20]";
  const borderColor = borcolor || "none";
  const fontSize = font || ""; // Default to an empty string if no font size is provided

  return (
    <button
      className={`relative ${buttonColor} ${textColor} px-4 py-2 ${borderColor} ${textHover} ${buttonSize} ${textborder} ${fontSize}`}
      onClick={onClick}
    >
      {/* Button Content */}
      <div className="flex items-center justify-center">
        <div>{children}</div>
        <div className="relative">
          {/* SVG Icon */}
          <svg
            className="w-4 h-4 absolute top-0 right-0 transform translate-x-4 -translate-y-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 0 0 7"></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default Button;
