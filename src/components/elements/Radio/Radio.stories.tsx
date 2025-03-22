import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import RadioGroup from "../Radio/Radio";

const meta = {
  title: "Components/Elements/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    selectedValue: { control: "text" },
    options: { control: "object" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "example",
    selectedValue: "option1",
    disabled: false,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};
