// import { Icon } from "@iconify/react";
import "./input.css";
import { Input } from "@heroui/input";
import type { ReactNode } from "react";

export interface InputElementProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  type?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  labelPlacement?: "outside" | "inside";
  className?: string;
}

const InputElement: React.FC<InputElementProps> = ({
  label,
  placeholder,
  value,
  onChange,
  size = "md",
  radius = "full",
  type = "text",
  name,
  disabled,
  required,
  startContent,
  endContent,
  labelPlacement = "outside",
  className,
}) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size={size}
      radius={radius}
      type={type}
      name={name}
      disabled={disabled}
      required={required}
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      className={className}
    />
  );
};

export default InputElement;
