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
    <div ref={cardRef} className={cn("h-[80vh] sticky top-[120px] lg:top-[250px]")}>
      <motion.div
        className={cn(
          "h-max w-full p-5 xl:p-10 rounded-xl relative bg-black border-2 border-primary"
        )}
        style={{ top: `calc(-1% + ${index * 25}px)`, scale }}
      >
        <div className="grid lg:grid-cols-2 place-items-stretch gap-5 xl:gap-10">
          <div className="space-y-3 xl:space-y-10">
            <Typography.H2>{title}</Typography.H2>
            <Typography.Text className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:text-primary">
              {description}
            </Typography.Text>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <motion.div className="relative h-[350px] border" style={{ scale: imgScale }}>
              <Image src={image} alt={title} fill objectFit="cover" sizes="100vw" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParaloxCard;
