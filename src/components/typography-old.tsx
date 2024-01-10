import { FC, ReactNode } from "react";

interface Props {
  children: string | string[] | ReactNode;
  varient?: "h1" | "h2" | "h3" | "h4" | "h5" | "small";
  className?: string;
}

const Typography: FC<Props> = ({ children, varient, className }) => {
  switch (varient) {
    case "h1":
      return (
        <h1 className={`text-8xl font-semibold leading-[110%] tracking-[0.96px] ${className}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`text-[64px] font-semibold leading-[110%] tracking-[0.64px] ${className}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`text-[40px] font-semibold leading-[120%] tracking-[0.40px] ${className}`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`text-[28px] font-medium leading-[130%] tracking-[0.28px] ${className}`}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`text-xl font-medium leading-[130%] tracking-[0.20px] ${className}`}>
          {children}
        </h5>
      );
    case "small":
      return (
        <p className={`text-sm font-normal leading-[150%] tracking-[0.14px] ${className}`}>
          {children}
        </p>
      );

    default:
      return (
        <p className={`text-base font-normal leading-[150%] tracking-[0.16px] ${className}`}>
          {children}
        </p>
      );
  }
};

export default Typography;
