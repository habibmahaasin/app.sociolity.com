import type { Meta, StoryObj } from "@storybook/react";
import InputElement from "./Input";

const meta = {
  title: "Components/Elements/Input",
  component: InputElement,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your Placeholder",
    type: "email",
    radius: "full",
    size: "md",
    labelPlacement: "inside",
  },
};
