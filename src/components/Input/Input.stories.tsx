import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "ghost", "error", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const Filled: Story = {
  args: {
    placeholder: "Filled variant",
    variant: "filled",
  },
};

export const Ghost: Story = {
  args: {
    placeholder: "Ghost variant",
    variant: "ghost",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error state",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    placeholder: "Success state",
    variant: "success",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small size",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    placeholder: "Medium size",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large size",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    placeholder: "Extra large size",
    size: "xl",
  },
};

export const AutoWidth: Story = {
  args: {
    placeholder: "Auto width",
    fullWidth: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

// Legacy stories for backward compatibility
export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
  },
};