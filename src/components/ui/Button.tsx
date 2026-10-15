"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 text-white font-semibold shadow-blue hover:shadow-blue-lg hover:scale-[1.02]",
  outline:
    "border-2 border-ag-navy-800 text-ag-navy-800 font-semibold hover:bg-ag-navy-800 hover:text-white",
  ghost:
    "text-ag-navy-800 hover:bg-ag-blue-100 border border-transparent",
  gold:
    "bg-gradient-to-br from-ag-gold-500 to-ag-gold-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs gap-1.5 rounded-full",
  md: "h-11 px-6 text-sm gap-2 rounded-full",
  lg: "h-12 px-6 text-sm gap-2 rounded-full sm:h-14 sm:px-8 sm:text-base sm:gap-2.5",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ag-blue-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "active:scale-[0.97]",
    "whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (props.as === "a") {
    const { as: _as, href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cn("group", classes)}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  const { as: _as, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn("group", classes)}
      {...buttonRest}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";