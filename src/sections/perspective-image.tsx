import image from "@/assets/heroImage.png";
import Container from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type FC } from "react";

const PerspectiveImage: FC = () => {
  const [rotatation, setRotation] = useState(12);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = ref.current?.getBoundingClientRect();
      //@ts-ignore
      const rotate = Math.round((rect?.bottom - window.innerHeight) / 50);
      rotate >= 0 && setRotation(rotate);
    });
  }, []);

  return (
    <section className="py-10">
      <Container>
        <motion.div
          ref={ref}
          className="transition-all ease-linear"
          initial={{
            transform: `perspective(500px) rotateX(12deg)`,
          }}
          animate={{
            transform: `perspective(500px) rotateX(${rotatation}deg)`,
          }}
        >
          <Image src={image} alt="" className="mx-auto" />
        </motion.div>
      </Container>
    </section>
  );
};

export default PerspectiveImage;
