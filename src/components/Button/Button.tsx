import React, { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "danger";

type SharedProps = {
  className?: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

type SpanProps = SharedProps & {
  asSpan: true;
};

type ButtonOnlyProps = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asSpan?: false;
  };

type ButtonProps = SpanProps | ButtonOnlyProps;

export default function Button({
  variant = "secondary",
  className,
  children,
  asSpan,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "px-3 py-1 rounded border text-sm transition-colors hover:cursor-pointer";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 border-blue-600 text-white hover:bg-blue-700",
    secondary: "border-gray-300 text-black hover:bg-gray-100",
    danger: "bg-red-600 border-red-600 text-white hover:bg-red-700",
  };

  const classes = clsx(baseStyles, variantStyles[variant], className);

  if (asSpan) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
