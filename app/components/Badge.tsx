import { ReactNode } from "react";

interface BadgeProps {
  variant?: "popular" | "chefsPick" | "category";
  children: ReactNode;
  className?: string;
}

export default function Badge({
  variant = "popular",
  children,
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-medium text-xs px-3 py-1";

  const variants = {
    popular:
      "bg-[var(--color-barrel-gold)] text-[var(--color-oak-dark)] rounded-full",
    chefsPick:
      "bg-[var(--color-oak-dark)] text-[var(--color-cream)] rounded-full",
    category:
      "bg-[var(--color-sand)] text-[var(--color-oak-medium)] border border-[var(--color-linen)] rounded-[var(--radius-md)]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
