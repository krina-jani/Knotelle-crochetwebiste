import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 tracking-wide";

    const variants = {
      primary:
        "bg-[#8F3032] text-white hover:bg-[#722628] shadow-sm hover:shadow-boutique-hover",
      secondary:
        "bg-[#FDE9E5] text-[#8F3032] hover:bg-[#F4C7C1] border border-[#E8D4CF]",
      outline:
        "border border-[#8F3032] text-[#8F3032] hover:bg-[#8F3032] hover:text-white bg-transparent",
      ghost:
        "text-[#3A211D] hover:bg-[#FDE9E5] hover:text-[#8F3032] bg-transparent",
      gold:
        "bg-[#C69A5A] text-white hover:bg-[#B38747] shadow-sm",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-2.5 gap-2",
      lg: "text-base px-8 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        {!isLoading && icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
