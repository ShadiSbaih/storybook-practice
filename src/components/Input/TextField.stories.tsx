import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";

const meta: Meta<typeof TextField> = {
    title: "Components/TextField",
    component: TextField,
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
        resize: {
            control: { type: "select" },
            options: ["none", "vertical", "horizontal", "both"],
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
        placeholder: "Enter your message here...",
        rows: 4,
    },
};

export const Filled: Story = {
    args: {
        placeholder: "Filled variant",
        variant: "filled",
        rows: 4,
    },
};

export const Ghost: Story = {
    args: {
        placeholder: "Ghost variant",
        variant: "ghost",
        rows: 4,
    },
};

export const Error: Story = {
    args: {
        placeholder: "Error state",
        variant: "error",
        rows: 4,
    },
};

export const Success: Story = {
    args: {
        placeholder: "Success state",
        variant: "success",
        rows: 4,
    },
};

export const Small: Story = {
    args: {
        placeholder: "Small size",
        size: "sm",
        rows: 3,
    },
};

export const Medium: Story = {
    args: {
        placeholder: "Medium size",
        size: "md",
        rows: 4,
    },
};

export const Large: Story = {
    args: {
        placeholder: "Large size",
        size: "lg",
        rows: 5,
    },
};

export const ExtraLarge: Story = {
    args: {
        placeholder: "Extra large size",
        size: "xl",
        rows: 6,
    },
};

export const AutoWidth: Story = {
    args: {
        placeholder: "Auto width",
        fullWidth: false,
        rows: 4,
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled textarea",
        disabled: true,
        rows: 4,
    },
};

export const WithValue: Story = {
    args: {
        defaultValue: "This is some pre-filled content in the textarea. You can edit this text or add more content as needed.",
        rows: 4,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <TextField placeholder="Default variant" rows={3} />
            <TextField placeholder="Filled variant" variant="filled" rows={3} />
            <TextField placeholder="Ghost variant" variant="ghost" rows={3} />
            <TextField placeholder="Error variant" variant="error" rows={3} />
            <TextField placeholder="Success variant" variant="success" rows={3} />
        </div>
    ),
};

export const ResizeOptions: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div>
                <label className="block text-sm font-medium mb-1">No Resize</label>
                <TextField placeholder="Cannot be resized" resize="none" rows={3} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Vertical Resize (Default)</label>
                <TextField placeholder="Can be resized vertically" resize="vertical" rows={3} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Horizontal Resize</label>
                <TextField placeholder="Can be resized horizontally" resize="horizontal" rows={3} />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Both Directions</label>
                <TextField placeholder="Can be resized in both directions" resize="both" rows={3} />
            </div>
        </div>
    ),
};

export const NoResize: Story = {
    args: {
        placeholder: "Fixed size - cannot be resized",
        resize: "none",
        rows: 4,
    },
};

export const VerticalResize: Story = {
    args: {
        placeholder: "Can be resized vertically only",
        resize: "vertical",
        rows: 4,
    },
};
