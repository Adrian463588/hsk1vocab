"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth = false, className = "", ...props }, ref) => {
    const widthStyle = fullWidth ? "w-full" : "";
    
    return (
      <div className={`relative ${widthStyle}`}>
        <input
          ref={ref}
          className={`peer w-full px-4 py-3 border-2 border-black bg-white text-black placeholder:text-stone-400 
            focus:outline-none focus:border-black focus:shadow-hard
            transition-all duration-200 ease-out 
            hover:shadow-hard-sm ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
