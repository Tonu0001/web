"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-[var(--duration-fast)] ease-[var(--ease-default)] rounded-[var(--radius-md)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[var(--color-barrel-gold)] text-[var(--color-oak-dark)] shadow-[var(--shadow-gold-sm)] hover:bg-[var(--color-barrel-amber)] hover:shadow-[var(--shadow-gold-md)] active:scale-[0.98]",
    secondary:
      "bg-transparent text-[var(--color-oak-dark)] border-2 border-[var(--color-oak-dark)] hover:bg-[var(--color-sand)] hover:border-[var(--color-oak-medium)] active:bg-[var(--color-linen)]",
    ghost:
      "bg-transparent text-[var(--color-oak-dark)] hover:bg-[var(--color-sand)] active:bg-[var(--color-linen)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-h-8",
    md: "px-6 py-3 text-base min-h-11",
    lg: "px-8 py-4 text-lg min-h-13",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
