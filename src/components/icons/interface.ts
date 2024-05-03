type arrows = "arrowRight" | "arrowLeft";
type socialMedia = "facebook" | "instagram";

interface IconProps {
  name: arrows | "spin" | "mail-send" | "call" | "schedule" | socialMedia;
  className?: string;
}

export default IconProps;
