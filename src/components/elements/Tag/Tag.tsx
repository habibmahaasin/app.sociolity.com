import { Icon } from "@iconify/react";
import "./tag.css";
import { Chip } from "@heroui/chip";

export interface TagElementProps {
  children: React.ReactNode;
  iconStart?: string;
  iconEnd?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?:
    | "solid"
    | "flat"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "dot"
    | undefined;
  onClick?: () => void;
}

const TagElement: React.FC<TagElementProps> = ({
  children,
  iconStart,
  iconEnd,
  color = "primary",
  radius = "full",
  size = "sm",
  className = "px-3",
  variant = "solid",
  onClick,
}) => {
  return (
    <Chip
      color={color}
      size={size}
      radius={radius}
      className={`${className}`}
      variant={variant}
      startContent={
        iconStart ? <Icon icon={iconStart} width="20" height="20" /> : null
      }
      endContent={
        iconEnd ? <Icon icon={iconEnd} width="20" height="20" /> : null
      }
      onClick={onClick}
    >
      {children}
    </Chip>
  );
};

export default TagElement;
