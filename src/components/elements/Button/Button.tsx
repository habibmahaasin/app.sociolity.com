import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

export interface ButtonElementProps {
  children: React.ReactNode;
  iconStart?: string;
  iconEnd?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  variant?:
    | "solid"
    | "ghost"
    | "flat"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | undefined;
  isLoading?: boolean;
  isIconOnly?: boolean;
  onClick?: () => void;
}

const ButtonElement: React.FC<ButtonElementProps> = ({
  children,
  iconStart,
  iconEnd,
  color = "primary",
  radius = "full",
  className = "px-6",
  variant = "solid",
  isLoading = false,
  isIconOnly = false,
  onClick,
}) => {
  return (
    <Button
      color={color}
      radius={radius}
      className={className}
      variant={variant}
      isLoading={isLoading}
      isIconOnly={isIconOnly}
      startContent={
        iconStart ? <Icon icon={iconStart} width="20" height="20" /> : null
      }
      endContent={
        iconEnd ? <Icon icon={iconEnd} width="20" height="20" /> : null
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonElement;
