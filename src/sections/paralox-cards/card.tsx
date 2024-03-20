import Typography from "@/components/typography";
import cn from "@/utils/className-merge";
import clsx from "clsx";
import { motion, useTransform } from "framer-motion";
import type { FC } from "react";
import type { CardProps } from "./interface";

const ParaloxCard: FC<CardProps> = ({ index, range, targetScale, progress }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className={clsx("h-[80vh] sticky top-0 flex items-end justify-center pt-[300px]")}>
      <motion.div
        className={cn("h-full w-full p-10 rounded-xl relative bg-black border-2 border-primary ")}
        style={{ top: `calc(-10% + ${index * 25}px)`, scale }}
      >
        <Typography.H2 className="text-[12rem] absolute top-0 -z-10 leading-none left-5 text-gray">
          {index + 1}
        </Typography.H2>

        <Typography.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, fugit adipisci. Nisi,
          reprehenderit atque! Aut reiciendis libero sequi ratione? Aliquam perspiciatis optio amet
          voluptas illum assumenda est unde possimus voluptatibus!
        </Typography.Text>
      </motion.div>
    </div>
  );
};

export default ParaloxCard;
