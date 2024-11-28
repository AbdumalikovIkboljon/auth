// components/Button.js
import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'px-6 py-[9.5px] rounded-md font-medium text-sm focus:outline-none transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-black-900 text-white hover:bg-black-600',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;