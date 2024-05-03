import cn from "@/utils/className-merge";
import type { FC } from "react";
import type ITypographyProps from "./interface";

const Hero: FC<ITypographyProps> = ({ children, className }) => (
  <h1
    className={cn(
      "font-bold transition-all leading-[120%]",
      "text-[2.44rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]",
      className
    )}
  >
    {children}
  </h1>
);

const H2: FC<ITypographyProps> = ({ children, className }) => (
  <h2 className={cn("font-semibold", "text-[2rem]", className)}>{children}</h2>
);

const H3: FC<ITypographyProps> = ({ children, className }) => (
  <h3 className={cn("font-semibold", "text-[1.75rem]", className)}>{children}</h3>
);

const H4: FC<ITypographyProps> = ({ children, className }) => (
  <h4 className={cn("font-semibold", "text-[1.5rem]", className)}>{children}</h4>
);

const H5: FC<ITypographyProps> = ({ children, className }) => (
  <h5 className={cn("font-semibold", "text-[1.25rem]", className)}>{children}</h5>
);

const Text: FC<ITypographyProps & { variant?: "regular" | "small" }> = ({
  children,
  className,
  variant = "regular",
}) => <p className={cn(variant === "small" ? "text-sm" : "text-base", className)}>{children}</p>;

const Typography = {
  Hero,
  H2,
  H3,
  H4,
  H5,
  Text,
};

export default Typography;
