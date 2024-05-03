import type { FC } from "react";
import ArrowRight from "./arrow-right";
import CallIcon from "./call-icon";
import FacebookIcon from "./facebook";
import Instagram from "./instagram";
import type IconProps from "./interface";
import MailSendIcon from "./mail-send";
import ScheduleIcon from "./schedule";
import SpinIcon from "./spin";

const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case "spin":
      return <SpinIcon className={className} />;

    case "arrowRight":
      return <ArrowRight className={className} />;

    case "mail-send":
      return <MailSendIcon className={className} />;

    case "call":
      return <CallIcon className={className} />;

    case "schedule":
      return <ScheduleIcon className={className} />;

    case "facebook":
      return <FacebookIcon className={className} />;

    case "instagram":
      return <Instagram className={className} />;

    default:
      return null;
  }
};

export default Icon;
