import React from "react";
import { Tag as AntdTag } from "antd";

export interface TagProps {
  color?: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Tag: React.FC<TagProps> = ({
  color = "#48E0AC",
  children,
  closable = false,
  onClose,
}) => {
  return (
    <AntdTag
      color={color}
      closable={closable}
      onClose={onClose}
      style={{
        padding: "2px 16px",
        borderRadius: 18,
      }}
    >
      {children}
    </AntdTag>
  );
};

export default Tag;
