import Typography from "@/components/typography";
import cn from "@/utils/className-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type FC } from "react";
import type { CardProps } from "./interface";

const ParaloxCard: FC<CardProps> = ({
  index,
  range,
  targetScale,
  progress,
  title,
  description,
  image,
}) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={cardRef} className={cn("h-[80vh] sticky top-[12vh] flex items-end justify-center")}>
      <motion.div
        className={cn("h-max w-full p-10 rounded-xl relative bg-black border-2 border-primary")}
        style={{ top: `calc(-10% + ${index * 25}px)`, scale }}
      >
        <div className="grid  lg:grid-cols-2 place-items-stretch gap-10 mt-5">
          <div className="space-y-10">
            <Typography.H2>{title}</Typography.H2>
            <Typography.Text className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:text-primary">
              {description}
            </Typography.Text>
          </div>
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
            <motion.div className="h-full w-full" style={{ scale: imgScale }}>
              <Image src={image} alt="" objectFit="cover" fill priority className="h-auto w-auto" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParaloxCard;
