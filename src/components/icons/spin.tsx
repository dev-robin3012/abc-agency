import cn from "@/utils/className-merge";
import type { FC } from "react";
import type IconProps from "./interface";

const SpinIcon: FC<Pick<IconProps, "className">> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={cn("animate animate-spin text-lg", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default SpinIcon;
