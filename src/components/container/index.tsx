import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx("container max-w-7xl md:px-10 lg:px-14", className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
