import type { PropsWithChildren, ReactNode } from "react";

interface ButtonProps extends PropsWithChildren {
  size?: "sm" | "md" | "lg";
  variant?: "fill" | "outline";
  type?: "primary" | "secondary" | "danger";
  arrowOnHover?: boolean;
  disabled?: boolean;
  loading?: boolean;
  iconPlace?: "start" | "end";
  className?: string;
  icon?: ReactNode;
  iconOnHover?: boolean;
}

export default ButtonProps;
