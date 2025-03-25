import type { Meta, StoryObj } from "@storybook/react";
import TagElement from "./Tag";

const meta = {
  title: "Components/Elements/Tag",
  component: TagElement,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    variant: {
      control: "select",
      options: ["solid", "flat", "bordered", "light", "faded", "shadow", "dot"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconStart: {
      control: "text",
    },
    iconEnd: {
      control: "text",
    },
  },
} satisfies Meta<typeof TagElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example Tag",
    color: "secondary",
    radius: "full",
    variant: "solid",
    iconStart: "",
    iconEnd: "",
  },
};
