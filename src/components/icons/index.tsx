import type { FC } from "react";
import ArrowRight from "./arrow-right";
import type IconProps from "./interface";
import SpinIcon from "./spin";

const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case "spin":
      return <SpinIcon className={className} />;

    case "arrowRight":
      return <ArrowRight className={className} />;

    default:
      return null;
  }
};

export default Icon;
