import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx("container max-w-7xl", className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
