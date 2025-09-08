import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "border",
  "transition-all",
  "duration-200",
  "outline-none",
  "placeholder:text-gray-400",
], {
  variants: {
    variant: {
      default: [
        "border-gray-200",
        "bg-white",
        "focus:border-blue-500",
        "focus:ring-2",
        "focus:ring-blue-200",
      ],
      filled: [
        "border-transparent",
        "bg-gray-200",
        "focus:bg-gray-100",
        "focus:border-blue-500",
        "focus:ring-2",
        "focus:ring-blue-200",
      ],
      ghost: [
        "border-transparent",
        "bg-transparent",
        "focus:border-gray-300",
        "focus:bg-gray-50",
      ],
      error: [
        "border-red-300",
        "bg-red-50",
        "focus:border-red-500",
        "focus:ring-2",
        "focus:ring-red-200",
        "text-red-900",
        "placeholder:text-red-400",
      ],
      success: [
        "border-green-300",
        "bg-green-50",
        "focus:border-green-500",
        "focus:ring-2",
        "focus:ring-green-200",
        "text-green-900",
        "placeholder:text-green-400",
      ],
    },
    size: {
      sm: ["px-2", "py-1", "text-sm", "rounded", "placeholder:text-xs"],
      md: ["px-3", "py-2", "text-base", "rounded-md", "placeholder:text-sm"],
      lg: ["px-4", "py-3", "text-lg", "rounded-lg", "placeholder:text-base"],
      xl: ["px-5", "py-4", "text-xl", "rounded-xl", "placeholder:text-lg"],
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: true,
  },
});

// TextField styles with additional min-height for textarea
const textFieldStyles = cva([
  "w-full",
  "border",
  "transition-all",
  "duration-200",
  "outline-none",
  "placeholder:text-gray-400",
], {
  variants: {
    variant: {
      default: [
        "border-gray-200",
        "bg-white",
        "focus:border-blue-500",
        "focus:ring-2",
        "focus:ring-blue-200",
      ],
      filled: [
        "border-transparent",
        "bg-gray-200",
        "focus:bg-gray-100",
        "focus:border-blue-500",
        "focus:ring-2",
        "focus:ring-blue-200",
      ],
      ghost: [
        "border-transparent",
        "bg-transparent",
        "focus:border-gray-300",
        "focus:bg-gray-50",
      ],
      error: [
        "border-red-300",
        "bg-red-50",
        "focus:border-red-500",
        "focus:ring-2",
        "focus:ring-red-200",
        "text-red-900",
        "placeholder:text-red-400",
      ],
      success: [
        "border-green-300",
        "bg-green-50",
        "focus:border-green-500",
        "focus:ring-2",
        "focus:ring-green-200",
        "text-green-900",
        "placeholder:text-green-400",
      ],
    },
    size: {
      sm: ["px-2", "py-1", "text-sm", "rounded", "placeholder:text-xs", "min-h-[60px]"],
      md: ["px-3", "py-2", "text-base", "rounded-md", "placeholder:text-sm", "min-h-[80px]"],
      lg: ["px-4", "py-3", "text-lg", "rounded-lg", "placeholder:text-base", "min-h-[100px]"],
      xl: ["px-5", "py-4", "text-xl", "rounded-xl", "placeholder:text-lg", "min-h-[120px]"],
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
    resize: {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: true,
    resize: "vertical",
  },
});

type InputVariants = VariantProps<typeof inputStyles>;
type TextFieldVariants = VariantProps<typeof textFieldStyles>;

export interface InputProps extends Omit<ComponentProps<"input">, keyof InputVariants>, InputVariants { }
export interface TextFieldProps extends Omit<ComponentProps<"textarea">, keyof TextFieldVariants>, TextFieldVariants { }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(inputStyles({ variant, size, fullWidth, className }))}
        {...props}
      />
    );
  }
);

export const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, variant, size, fullWidth, resize, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textFieldStyles({ variant, size, fullWidth, resize, className }))}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
TextField.displayName = "TextField";