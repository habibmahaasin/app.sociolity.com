import React from "react";

export type RadioGroupProps = {
  options: { label: string; value: string }[];
  name: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  direction?: "row" | "col";
  size?: "sm" | "md" | "lg";
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  disabled,
  className,
  direction = "col",
  size = "md",
}) => {
  return (
    <div
      className={`flex ${direction === "row" ? "md:flex-row md:space-x-6 " : "flex-col space-y-2"} ${className}`}
    >
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange?.(option.value)}
            disabled={disabled}
            className={`radio radio-primary radio-${size}`}
          />
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
