import cn from "@/utils/className-merge";
import colors from "@/utils/colors";
import { motion } from "framer-motion";
import type { FC } from "react";
import Icon from "../icons";
import type ButtonProps from "./interface";

const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  type = "primary",
  variant = "fill",
  disabled,
  loading,
  iconPlace = "end",
  className,
  icon,
  iconOnHover = false,
}) => {
  const sizeing = cn({
    "px-5 py-2 text-sm": size === "sm",
    "px-6 py-2.5 text-base": size === "md",
    "px-7 py-3 text-base": size === "lg",
  });

  return (
    <motion.button
      className={cn(
        sizeing,
        variant === "fill" ? `text-dark` : `text-${type}`,
        "rounded-3xl inline-flex gap-2 items-center justify-center transition-all disabled:cursor-not-allowed disabled:bg-opacity-30 disabled:border-gray disabled:text-gray group",
        iconPlace === "start" && "flex-row-reverse",
        className
      )}
      style={{
        border: `1px solid ${colors[type]}`,
        background: variant === "fill" ? colors[type] : "",
      }}
      disabled={disabled || loading}
      whileHover={{
        boxShadow: disabled ? "none" : `0px 0px 16px ${colors[type]}`,
        transition: {
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}{" "}
      {loading ? (
        <Icon name="spin" className="text-inherit" />
      ) : (
        <span className={cn(iconOnHover ? "hidden group-hover:block" : "")}>{icon}</span>
      )}
    </motion.button>
  );
};

export default Button;
