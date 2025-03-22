import React from "react";
import { Icon } from "@iconify/react";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={loading || disabled}
      className={`btn shadow-none px-8 bg-gradient-to-r from-[#01E965] via-[#00CD89] to-[#02ABA6] text-white border-none flex items-center justify-center gap-2 ${disabled && "opacity-50 cursor-not-allowed"} ${className}`}
      onClick={onClick}
    >
      {children}
      {loading && (
        <Icon icon="line-md:loading-twotone-loop" width="18" height="18" />
      )}
    </button>
  );
};

export default Button;
