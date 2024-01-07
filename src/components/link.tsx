import clsx, { type ClassValue } from "clsx";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  label: string;
  href: string;
  className?: ClassValue;
}

const CustomLink: FC<Props> = ({ label, href, className }) => {
  return (
    <Link href={href} className={clsx("relative group-hover:text-primary group", className)}>
      {label}

      <span
        className={clsx(
          "absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-primary-light"
        )}
      />
    </Link>
  );
};

export default CustomLink;
