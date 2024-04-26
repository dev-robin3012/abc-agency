import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type FC, type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  image: string;
}

const SingleCaseStudy: FC<Props> = ({ children, image }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={targetRef}
      className="relative top-0 h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <motion.div className="absolute inset-0 bg-neutral-950/70" style={{ opacity }} />
      {children}
    </section>
  );
};

export default SingleCaseStudy;
