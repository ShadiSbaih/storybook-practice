import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils/index";

const buttonStyles = cva(
  // Here we provide base styles (common styles shared between all buttons):
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "w-fit",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        solid: " ",
        outline: "border-2 bg-transparent",
        ghost: "bg-transparent border-transparent",
        realistic:
          "relative bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transform active:translate-y-1 active:shadow-md",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
      },
      colorscheme: {
        primary: "",
        secondary: "",
        danger: "",
        success: "",
        warning: "",
        info: "",
        light: "",
        dark: "",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        colorscheme: "primary",
        className:
          "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 disabled:bg-primary-300 disabled:hover:bg-primary-300",
      },
      {
        variant: "solid",
        colorscheme: "secondary",
        className:
          "bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 disabled:bg-secondary-300 disabled:hover:bg-secondary-300",
      },
      {
        variant: "solid",
        colorscheme: "danger",
        className:
          "bg-danger-500 hover:bg-danger-600 text-white focus:ring-danger-500 disabled:bg-danger-300 disabled:hover:bg-danger-300",
      },
      {
        variant: "solid",
        colorscheme: "success",
        className:
          "bg-success-500 hover:bg-success-600 text-white focus:ring-success-500 disabled:bg-success-300 disabled:hover:bg-success-300",
      },
      {
        variant: "solid",
        colorscheme: "warning",
        className:
          "bg-warning-500 hover:bg-warning-600 text-white focus:ring-warning-500 disabled:bg-warning-300 disabled:hover:bg-warning-300",
      },
      {
        variant: "solid",
        colorscheme: "info",
        className:
          "bg-info-500 hover:bg-info-600 text-white focus:ring-info-500 disabled:bg-info-300 disabled:hover:bg-info-300",
      },
      {
        variant: "solid",
        colorscheme: "light",
        className:
          "bg-light-100 hover:bg-light-200 text-light-900 focus:ring-light-500 disabled:bg-light-50 disabled:hover:bg-light-50",
      },
      {
        variant: "solid",
        colorscheme: "dark",
        className:
          "bg-dark-800 hover:bg-dark-900 text-white focus:ring-dark-500 disabled:bg-dark-600 disabled:hover:bg-dark-600",
      },
      // Outline variants
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500 disabled:text-primary-300 disabled:border-primary-200",
      },
      {
        variant: "outline",
        colorscheme: "secondary",
        className:
          "text-secondary-600 border-secondary-500 hover:bg-secondary-50 hover:text-secondary-700 focus:ring-secondary-500 disabled:text-secondary-300 disabled:border-secondary-200",
      },
      {
        variant: "outline",
        colorscheme: "danger",
        className:
          "text-danger-600 border-danger-500 hover:bg-danger-50 hover:text-danger-700 focus:ring-danger-500 disabled:text-danger-300 disabled:border-danger-200",
      },
      {
        variant: "outline",
        colorscheme: "success",
        className:
          "text-success-600 border-success-500 hover:bg-success-50 hover:text-success-700 focus:ring-success-500 disabled:text-success-300 disabled:border-success-200",
      },
      {
        variant: "outline",
        colorscheme: "warning",
        className:
          "text-warning-600 border-warning-500 hover:bg-warning-50 hover:text-warning-700 focus:ring-warning-500 disabled:text-warning-300 disabled:border-warning-200",
      },
      {
        variant: "outline",
        colorscheme: "info",
        className:
          "text-info-600 border-info-500 hover:bg-info-50 hover:text-info-700 focus:ring-info-500 disabled:text-info-300 disabled:border-info-200",
      },
      {
        variant: "outline",
        colorscheme: "light",
        className:
          "text-light-600 border-light-300 hover:bg-light-50 hover:text-light-700 focus:ring-light-500 disabled:text-light-300 disabled:border-light-200",
      },
      {
        variant: "outline",
        colorscheme: "dark",
        className:
          "text-dark-600 border-dark-500 hover:bg-dark-50 hover:text-dark-700 focus:ring-dark-500 disabled:text-dark-300 disabled:border-dark-200",
      },
      // Ghost variants
      {
        variant: "ghost",
        colorscheme: "primary",
        className:
          "text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500 disabled:text-primary-300",
      },
      {
        variant: "ghost",
        colorscheme: "secondary",
        className:
          "text-secondary-600 hover:bg-secondary-50 hover:text-secondary-700 focus:ring-secondary-500 disabled:text-secondary-300",
      },
      {
        variant: "ghost",
        colorscheme: "danger",
        className:
          "text-danger-600 hover:bg-danger-50 hover:text-danger-700 focus:ring-danger-500 disabled:text-danger-300",
      },
      {
        variant: "ghost",
        colorscheme: "success",
        className:
          "text-success-600 hover:bg-success-50 hover:text-success-700 focus:ring-success-500 disabled:text-success-300",
      },
      {
        variant: "ghost",
        colorscheme: "warning",
        className:
          "text-warning-600 hover:bg-warning-50 hover:text-warning-700 focus:ring-warning-500 disabled:text-warning-300",
      },
      {
        variant: "ghost",
        colorscheme: "info",
        className:
          "text-info-600 hover:bg-info-50 hover:text-info-700 focus:ring-info-500 disabled:text-info-300",
      },
      {
        variant: "ghost",
        colorscheme: "light",
        className:
          "text-light-600 hover:bg-light-50 hover:text-light-700 focus:ring-light-500 disabled:text-light-300",
      },
      {
        variant: "ghost",
        colorscheme: "dark",
        className:
          "text-dark-600 hover:bg-dark-50 hover:text-dark-700 focus:ring-dark-500 disabled:text-dark-300",
      },
      // 3D variants - Unique styles for each colorscheme
      {
        variant: "realistic",
        colorscheme: "primary",
        className:
          "bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-primary-700 hover:border-primary-800 active:border-primary-600",
      },
      {
        variant: "realistic",
        colorscheme: "secondary",
        className:
          "bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500 text-white shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-secondary-600 hover:border-secondary-700 active:border-secondary-500",
      },
      {
        variant: "realistic",
        colorscheme: "danger",
        className:
          "bg-gradient-to-tr from-danger-400 via-red-500 to-danger-600 text-white shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-danger-700 hover:border-danger-800 active:border-danger-600 shadow-danger-300/50",
      },
      {
        variant: "realistic",
        colorscheme: "success",
        className:
          "bg-gradient-to-bl from-success-400 to-success-600 text-white shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-success-700 hover:border-success-800 active:border-success-600 shadow-success-300/50",
      },
      {
        variant: "realistic",
        colorscheme: "warning",
        className:
          "bg-gradient-to-r from-warning-300 via-yellow-400 to-warning-500 text-warning-900 shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-warning-600 hover:border-warning-700 active:border-warning-500 shadow-warning-200/60",
      },
      {
        variant: "realistic",
        colorscheme: "info",
        className:
          "bg-gradient-to-tl from-info-400 via-cyan-500 to-info-600 text-white shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-info-700 hover:border-info-800 active:border-info-600 shadow-info-300/50",
      },
      {
        variant: "realistic",
        colorscheme: "light",
        className:
          "bg-gradient-to-br from-white via-light-50 to-light-100 text-light-800 shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-light-300 hover:border-light-400 active:border-light-200 shadow-light-400/30",
      },
      {
        variant: "realistic",
        colorscheme: "dark",
        className:
          "bg-gradient-to-br from-dark-600 via-gray-800 to-dark-900 text-white shadow-lg hover:shadow-xl active:shadow-md border-b-4 border-dark-900 hover:border-black active:border-dark-800 shadow-dark-900/60",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
