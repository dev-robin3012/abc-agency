import img1 from "@/assets/card-img-1.jpg";
import img2 from "@/assets/card-img-2.jpg";
import img3 from "@/assets/card-img-3.jpg";
import img4 from "@/assets/card-img-4.jpg";
import cn from "@/utils/className-merge";
import type { ClassValue } from "clsx";
import { motion, type MotionValue } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  y: MotionValue;
  className?: ClassValue;
}

const Column: FC<Props> = ({ y, className }) => {
  return (
    <motion.div className={cn("space-y-4 relative", className)} style={{ y }}>
      <div className="rounded-lg overflow-hidden relative h-[400px]">
        <Image src={img1} alt="" fill objectFit="cover" />
      </div>
      <div className="rounded-lg overflow-hidden relative h-[400px]">
        <Image src={img2} alt="" fill objectFit="cover" />
      </div>
      <div className="rounded-lg overflow-hidden relative h-[400px]">
        <Image src={img3} alt="" fill objectFit="cover" />
      </div>
      <div className="rounded-lg overflow-hidden relative h-[400px]">
        <Image src={img4} alt="" fill objectFit="cover" />
      </div>
    </motion.div>
  );
};

export default Column;
