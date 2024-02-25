import Container from "@/components/container";
import Typography from "@/components/typography";
import clsx, { ClassValue } from "clsx";
import { motion, useScroll } from "framer-motion";
import { useRef, type FC } from "react";

const Showcase: FC = () => {
  return (
    <motion.section className="py-10">
      <Container className="sticky top-0">
        <div>
          <Typography.H2>This is Showcase section</Typography.H2>
          <Typography.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore inventore dolor minima
            unde nesciunt autem exercitationem deleniti aliquid similique. Labore consequuntur
            sapiente fugiat vero mollitia eius maiores quos, a tempore!
          </Typography.Text>
        </div>

        <motion.div className="relative h-[50vh]">
          <SingleItem className="bg-red-400 z-10" />
          <SingleItem className="bg-blue-500 z-20" />
          <SingleItem className="bg-primary z-30" />
        </motion.div>
      </Container>
    </motion.section>
  );
};

const SingleItem: FC<{ className: ClassValue }> = ({ className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  return (
    <motion.div
      ref={ref}
      className={clsx("absolute inset-0", className)}
      style={{
        opacity: scrollYProgress,
        scale: scrollYProgress,
        transformOrigin: "bottom",
      }}
    >
      Hello
    </motion.div>
  );
};

export default Showcase;
