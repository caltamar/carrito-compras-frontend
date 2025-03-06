import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;