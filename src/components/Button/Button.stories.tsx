import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import { withMaxWidth } from "../../../.storybook/decorators";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        children: "shared content",
    }//default args for all stories --> anything  here will  be shared across all stories
    ,
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["solid", "outline", "ghost", "realistic"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl"],
        },
        colorscheme: {
            control: { type: "select" },
            options: ["primary", "secondary", "danger", "success", "warning", "info", "light", "dark"],
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        variant: "solid",
        //here children will be "shared content" because it is defined in the default args
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

// Realistic Variant
export const Realistic: Story = {
    args: {
        variant: "realistic",
        children: "Realistic Button",
    },

};

// Size Variants
export const SizeSmall: Story = {
    args: {
        variant: "solid",
        size: "sm",
        children: "Small",
    },
    decorators: [withMaxWidth],

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

// Colorscheme Variants - Realistic
export const RealisticPrimary: Story = {
    args: {
        variant: "realistic",
        colorscheme: "primary",
        children: "Primary Realistic",
    },
};

export const RealisticSecondary: Story = {
    args: {
        variant: "realistic",
        colorscheme: "secondary",
        children: "Secondary Realistic",
    },
};

export const RealisticDanger: Story = {
    args: {
        variant: "realistic",
        colorscheme: "danger",
        children: "Danger Realistic",
    },
};

export const RealisticSuccess: Story = {
    args: {
        variant: "realistic",
        colorscheme: "success",
        children: "Success Realistic",
    },
};

export const RealisticWarning: Story = {
    args: {
        variant: "realistic",
        colorscheme: "warning",
        children: "Warning Realistic",
    },
};

export const RealisticInfo: Story = {
    args: {
        variant: "realistic",
        colorscheme: "info",
        children: "Info Realistic",
    },
};

export const RealisticLight: Story = {
    args: {
        variant: "realistic",
        colorscheme: "light",
        children: "Light Realistic",
    },
};

export const RealisticDark: Story = {
    args: {
        variant: "realistic",
        colorscheme: "dark",
        children: "Dark Realistic",
    },
};

export const realistic: Story = {
    args: {
        variant: "realistic",
        children: "Button",
    },
};
