import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: "solid",
        children: "Button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Button",
        size: "xl",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Button",
    },
};

export const Disabled: Story = {
    args: {
        variant: "solid",
        children: "Button",
        disabled: true,
    },
};

export const DisabledOutline: Story = {
    args: {
        variant: "outline",
        children: "Button",
        disabled: true,
    },
};

export const DisabledGhost: Story = {
    args: {
        variant: "ghost",
        children: "Button",
        disabled: true,
    },
};

// Three D Variant
export const ThreeD: Story = {
    args: {
        variant: "three_D",
        children: "3D Button",
    },
};

// Size Variants
export const SizeSmall: Story = {
    args: {
        variant: "solid",
        size: "sm",
        children: "Small",
    },
};

export const SizeMedium: Story = {
    args: {
        variant: "solid",
        size: "md",
        children: "Medium",
    },
};

export const SizeLarge: Story = {
    args: {
        variant: "solid",
        size: "lg",
        children: "Large",
    },
};

export const SizeExtraLarge: Story = {
    args: {
        variant: "solid",
        size: "xl",
        children: "Extra Large",
    },
};

// Colorscheme Variants - Solid
export const SolidPrimary: Story = {
    args: {
        variant: "solid",
        colorscheme: "primary",
        children: "Primary",
    },
};

export const SolidSecondary: Story = {
    args: {
        variant: "solid",
        colorscheme: "secondary",
        children: "Secondary",
    },
};

export const SolidDanger: Story = {
    args: {
        variant: "solid",
        colorscheme: "danger",
        children: "Danger",
    },
};

export const SolidSuccess: Story = {
    args: {
        variant: "solid",
        colorscheme: "success",
        children: "Success",
    },
};

export const SolidWarning: Story = {
    args: {
        variant: "solid",
        colorscheme: "warning",
        children: "Warning",
    },
};

export const SolidInfo: Story = {
    args: {
        variant: "solid",
        colorscheme: "info",
        children: "Info",
    },
};

export const SolidLight: Story = {
    args: {
        variant: "solid",
        colorscheme: "light",
        children: "Light",
    },
};

export const SolidDark: Story = {
    args: {
        variant: "solid",
        colorscheme: "dark",
        children: "Dark",
    },
};

// Colorscheme Variants - Outline
export const OutlinePrimary: Story = {
    args: {
        variant: "outline",
        colorscheme: "primary",
        children: "Primary",
    },
};

export const OutlineSecondary: Story = {
    args: {
        variant: "outline",
        colorscheme: "secondary",
        children: "Secondary",
    },
};

export const OutlineDanger: Story = {
    args: {
        variant: "outline",
        colorscheme: "danger",
        children: "Danger",
    },
};

export const OutlineSuccess: Story = {
    args: {
        variant: "outline",
        colorscheme: "success",
        children: "Success",
    },
};

export const OutlineWarning: Story = {
    args: {
        variant: "outline",
        colorscheme: "warning",
        children: "Warning",
    },
};

export const OutlineInfo: Story = {
    args: {
        variant: "outline",
        colorscheme: "info",
        children: "Info",
    },
};

export const OutlineLight: Story = {
    args: {
        variant: "outline",
        colorscheme: "light",
        children: "Light",
    },
};

export const OutlineDark: Story = {
    args: {
        variant: "outline",
        colorscheme: "dark",
        children: "Dark",
    },
};

// Colorscheme Variants - Ghost
export const GhostPrimary: Story = {
    args: {
        variant: "ghost",
        colorscheme: "primary",
        children: "Primary",
    },
};

export const GhostSecondary: Story = {
    args: {
        variant: "ghost",
        colorscheme: "secondary",
        children: "Secondary",
    },
};

export const GhostDanger: Story = {
    args: {
        variant: "ghost",
        colorscheme: "danger",
        children: "Danger",
    },
};

export const GhostSuccess: Story = {
    args: {
        variant: "ghost",
        colorscheme: "success",
        children: "Success",
    },
};

export const GhostWarning: Story = {
    args: {
        variant: "ghost",
        colorscheme: "warning",
        children: "Warning",
    },
};

export const GhostInfo: Story = {
    args: {
        variant: "ghost",
        colorscheme: "info",
        children: "Info",
    },
};

export const GhostLight: Story = {
    args: {
        variant: "ghost",
        colorscheme: "light",
        children: "Light",
    },
};

export const GhostDark: Story = {
    args: {
        variant: "ghost",
        colorscheme: "dark",
        children: "Dark",
    },
};

// Colorscheme Variants - Three D
export const ThreeDPrimary: Story = {
    args: {
        variant: "three_D",
        colorscheme: "primary",
        children: "Primary 3D",
    },
};

export const ThreeDSecondary: Story = {
    args: {
        variant: "three_D",
        colorscheme: "secondary",
        children: "Secondary 3D",
    },
};

export const ThreeDDanger: Story = {
    args: {
        variant: "three_D",
        colorscheme: "danger",
        children: "Danger 3D",
    },
};

export const ThreeDSuccess: Story = {
    args: {
        variant: "three_D",
        colorscheme: "success",
        children: "Success 3D",
    },
};

export const ThreeDWarning: Story = {
    args: {
        variant: "three_D",
        colorscheme: "warning",
        children: "Warning 3D",
    },
};

export const ThreeDInfo: Story = {
    args: {
        variant: "three_D",
        colorscheme: "info",
        children: "Info 3D",
    },
};

export const ThreeDLight: Story = {
    args: {
        variant: "three_D",
        colorscheme: "light",
        children: "Light 3D",
    },
};

export const ThreeDDark: Story = {
    args: {
        variant: "three_D",
        colorscheme: "dark",
        children: "Dark 3D",
    },
};

export const three_D: Story = {
    args: {
        variant: "three_D",
        children: "Button",
    },
};
