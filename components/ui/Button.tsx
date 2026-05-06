import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary",
    secondary:
      "border border-border bg-card text-foreground hover:bg-background focus-visible:outline-muted",
    ghost: "text-foreground hover:bg-background focus-visible:outline-muted",
  };

  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />
  );
}
