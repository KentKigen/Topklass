import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-heading font-black tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed",
          "interactive-hover button-press focus-ring",
          {
            "bg-brand-mustard text-brand-black hover:brightness-110": variant === "primary",
            "bg-white text-brand-black hover:bg-gray-200": variant === "secondary",
            "border-2 border-brand-mustard text-brand-mustard hover:bg-brand-mustard hover:text-brand-black": variant === "outline",
            "bg-transparent text-white hover:text-brand-mustard": variant === "ghost",
            "bg-transparent text-white hover:bg-white/10": variant === "icon",
            "h-10 px-4 text-xs": size === "sm",
            "h-12 px-8 text-sm": size === "md",
            "h-14 px-10 text-base": size === "lg",
            "h-10 w-10 p-0 text-base": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
