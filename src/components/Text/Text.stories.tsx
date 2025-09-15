import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "div", "label"],
    },
    emphasis: {
      control: { type: "select" },
      options: ["low", "medium", "high"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["thin", "normal", "medium", "semibold", "bold", "black"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    italic: {
      control: { type: "boolean" },
    },
    underline: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick",
  },
};