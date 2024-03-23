import type { StaticImageData } from "next/image";

export interface CardProps {
  index: number;
  range: any;
  targetScale: number;
  progress: any;
  title: string;
  description: string;
  image: StaticImageData;
}
