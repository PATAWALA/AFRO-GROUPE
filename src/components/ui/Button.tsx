"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "neon" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
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
  neon: "bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 text-ag-deep-900 font-semibold hover:from-ag-neon-400 hover:to-ag-neon-500 shadow-lg shadow-ag-neon-500/20 hover:shadow-ag-neon-500/40",
  outline:
    "border border-ag-neon-500/40 text-ag-neon-400 hover:bg-ag-neon-500/10 hover:border-ag-neon-500/70 backdrop-blur-sm",
  ghost:
    "text-ag-ink hover:bg-white/5 hover:text-ag-neon-400 border border-transparent",
  dark: "bg-ag-deep-800 text-ag-ink border border-white/10 hover:border-ag-neon-500/40 hover:bg-ag-deep-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5 rounded-full",
  md: "h-11 px-6 text-sm gap-2 rounded-full",
  lg: "h-14 px-8 text-base gap-2.5 rounded-full",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "neon",
    size = "md",
    glow = false,
    icon,
    iconPosition = "right",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ag-neon-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ag-deep-900",
    "disabled:opacity-50 disabled:pointer-events-none",
    "active:scale-[0.97]",
    variantStyles[variant],
    sizeStyles[size],
    glow && "glow-neon",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
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