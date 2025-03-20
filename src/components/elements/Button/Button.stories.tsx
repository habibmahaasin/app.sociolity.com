import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "Components/Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
    },
    size: { control: "select" },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

export const Default: Story = {
  args: {
    type: "default",
    children: "Default Button",
  },
};

export const Dashed: Story = {
  args: {
    type: "dashed",
    children: "Dashed Button",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    children: "Link Button",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    children: "Text Button",
  },
};
