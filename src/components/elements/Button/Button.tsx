import React from "react";
import { Button as AntdButton } from "antd";

export interface ButtonProps {
  type?: "primary" | "default" | "dashed" | "link" | "text";
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  size = "middle",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <AntdButton
      style={{
        padding: "0 24px",
      }}
      type={type}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
