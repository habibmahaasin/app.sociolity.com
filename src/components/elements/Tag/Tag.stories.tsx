import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tag from "./Tag";

const meta = {
  title: "Components/Elements/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "#48E0AC",
        "magenta",
        "red",
        "volcano",
        "orange",
        "gold",
        "lime",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple",
      ],
    },
    closable: { control: "boolean" },
    children: { control: "text" },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#48E0AC",
    children: "Default Tag",
    closable: false,
  },
};

export const Closable: Story = {
  args: {
    color: "red",
    children: "Closable Tag",
    closable: true,
  },
};

export const CustomText: Story = {
  args: {
    color: "gold",
    children: "Custom Text Tag",
    closable: false,
  },
};
