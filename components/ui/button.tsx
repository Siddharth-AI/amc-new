import { cn } from "@/lib/utils";
import {
  type ButtonHTMLAttributes,
  forwardRef,
  type ReactElement,
  cloneElement,
  isValidElement,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", disabled, children, asChild, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      // Ink navy — primary action
      primary: "bg-navy text-white hover:bg-navy-dark",
      // Teal accent — used sparingly
      accent: "bg-primary text-white hover:bg-primary-dark",
      // Quiet outline
      outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
      // Text-only
      ghost: "text-navy hover:bg-navy/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-[0.95rem]",
      lg: "h-13 px-8 text-base",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<any>, {
        className: cn(classes, (children as ReactElement<any>).props.className),
        ...props,
      });
    }

    return (
      <button className={classes} ref={ref} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
