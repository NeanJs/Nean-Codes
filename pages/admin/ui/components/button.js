import React from "react";

export const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-lg font-medium transition hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
};
