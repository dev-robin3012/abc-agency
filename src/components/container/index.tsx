import clsx from "clsx";
import { forwardRef, type PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} className={clsx("container max-w-7xl md:px-10 lg:px-14", className)} {...rest}>
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
