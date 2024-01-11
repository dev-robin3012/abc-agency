import clsx from "clsx";
import type { FC } from "react";
import type IconProps from "./interface";

const ArrowRight: FC<Pick<IconProps, "className">> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={clsx(className)}
    >
      <g clipPath="url(#clip0_306_461)">
        <path
          d="M23.8414 11.6155L18.387 6.161C18.191 5.93221 17.8467 5.90554 17.6179 6.10152C17.3891 6.29746 17.3624 6.64179 17.5584 6.87059C17.5767 6.89191 17.5966 6.91183 17.6179 6.93007L22.1396 11.4573H0.545428C0.244214 11.4573 0 11.7015 0 12.0027C0 12.304 0.244214 12.5482 0.545428 12.5482H22.1396L17.6179 17.0699C17.3891 17.2658 17.3624 17.6102 17.5584 17.839C17.7544 18.0677 18.0987 18.0944 18.3275 17.8984C18.3488 17.8802 18.3687 17.8603 18.387 17.839L23.8414 12.3845C24.0529 12.1718 24.0529 11.8282 23.8414 11.6155Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_306_461">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRight;
