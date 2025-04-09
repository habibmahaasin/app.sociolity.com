import type { Meta, StoryObj } from "@storybook/react";
import HeaderModule from "./Header";

const meta = {
  title: "Components/Modules/Header",
  component: HeaderModule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderModule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
