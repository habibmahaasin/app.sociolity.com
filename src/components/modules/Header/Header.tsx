import ButtonElement from "../../elements/Button";
import "./header.css";
import { User } from "@heroui/react";

export interface HeaderModuleProps {
  className?: string;
}

const HeaderModule: React.FC<HeaderModuleProps> = ({
  className = "w-[900px]",
}) => {
  return (
    <div
      className={`h-[55px] flex items-center justify-between px-6 py-2 bg-white rounded-full border flex items-center justify-between ${className}`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 4 }, (_, index) => (
          <ButtonElement
            color="primary"
            iconEnd=""
            iconStart=""
            radius="full"
            variant={index === 0 ? "solid" : "light"}
            className={`!font-semibold !text-xs
              ${index !== 0 ? "!text-primary " : undefined}`}
            key={index}
          >
            Click Me
          </ButtonElement>
        ))}
      </div>

      {/* need to be documented */}
      <div className="px-2 py-6 flex items-center">
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          description="Product Designer"
          name="Jane Doe"
        />
      </div>
    </div>
  );
};

export default HeaderModule;
