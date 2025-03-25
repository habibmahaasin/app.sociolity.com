import type { Meta, StoryObj } from "@storybook/react";
import ButtonElement from "./Button";

const meta = {
  title: "Components/Elements/Button",
  component: ButtonElement,
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
      options: [
        "solid",
        "flat",
        "ghost",
        "bordered",
        "light",
        "faded",
        "shadow",
      ],
    },
    iconStart: {
      control: "text",
    },
    iconEnd: {
      control: "text",
    },
  },
} satisfies Meta<typeof ButtonElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    color: "primary",
    radius: "full",
    variant: "solid",
    iconStart: "",
    iconEnd: "",
  },
};
