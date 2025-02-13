import { clsx } from "clsx";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { children, className, variant = "primary", size = "md", href, ...props },
    ref
  ) => {
    const baseStyles =
      "button inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full";

    const variants = {
      primary:
        "bg-yellow-400 text-black border border-yellow-950 focus-visible:ring-yellow-400",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500",
    };

    const sizes = {
      sm: "h-12 px-4 text-base",
      md: "h-14 px-6 text-md",
      lg: "h-16 px-8 text-lg",
    };

    const styles = twMerge(
      clsx(baseStyles, variants[variant], sizes[size], className)
    );

    if (href) {
      return (
        <a
          href={href}
          className={styles}
          {...(props as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        className={styles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
