import React from "react";

export type InputProps = {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  disabled,
  error,
  size = "md",
  className,
  required,
  onChange,
  ...props
}) => {
  return (
    <div className={`form-control w-full`}>
      {label && (
        <label className="label text-xs mb-1">
          {required && <span className="text-red-500">*</span>}
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={[
          "input input-bordered border-gray-300 px-4 py-2 focus:ring-none focus:shadow-none focus:outline-none",
          size === "sm" && "input-sm",
          size === "lg" && "input-lg",
          error && "input-error border-red-500",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
