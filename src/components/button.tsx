import { FC } from "react";
import ArrowRight from "./icons/arrow-right";

interface Props {
  children: string | string[];
  secondary?: boolean;
  arrow?: boolean;
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ children, secondary = false, arrow = false, fullWidth = false }) => {
  return (
    <button
      className={`px-6 border rounded-3xl py-2.5 inline-flex gap-4 items-center justify-center shrink-0 transition-all ${
        fullWidth ? "w-full" : ""
      } ${
        secondary
          ? "border-secondary text-secondary hover:bg-[#F5F066] hover:text-dark active:bg-secondary"
          : "border-primary text-primary hover:bg-[#BCF266] hover:text-dark active:bg-primary"
      } `}
    >
      {children} {arrow && <ArrowRight />}
    </button>
  );
};

export default Button;
