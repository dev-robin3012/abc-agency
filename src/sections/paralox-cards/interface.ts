import type { StaticImageData } from "next/legacy/image";

export interface CardProps {
  index: number;
  range: any;
  targetScale: number;
  progress: any;
  title: string;
  description: string;
  image: StaticImageData;
}
