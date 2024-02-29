import Container from "@/components/container";
import cn from "@/utils/className-merge";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type FC } from "react";

const colors = ["#1d4ed8", "#7e22ce", "#be185d", "#047857", "#c2410c"];

const Showcase: FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.section className="py-10" ref={sectionRef}>
      <Container>
        {/* <div>
          <Typography.H2>This is Showcase section</Typography.H2>
          <Typography.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore inventore dolor minima
            unde nesciunt autem exercitationem deleniti aliquid similique. Labore consequuntur
            sapiente fugiat vero mollitia eius maiores quos, a tempore!
          </Typography.Text>
        </div> */}

        <motion.div className="relative ">
          {colors.map((color, index) => (
            <SingleItem
              key={index}
              index={index}
              color={color}
              range={[0 * 0.25, 1]}
              targetScale={1 - (5 - index) * 0.05}
              progress={scrollYProgress}
            />
          ))}

          {/* <SingleItem index={1} className="bg-blue-500" range={[1 * 0.25, 1]} />
          <SingleItem index={2} className="bg-primary" range={[2 * 0.25, 1]} /> */}
        </motion.div>
      </Container>
    </motion.section>
  );
};

const SingleItem: FC<{
  color: string;
  index: number;
  range: any;
  targetScale: number;
  progress: any;
}> = ({ color, index, range, targetScale, progress }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className={clsx("h-screen sticky top-0 flex items-center justify-center")}>
      <motion.div
        className={cn("h-96 w-full p-10 rounded-2xl relative -top-[10%]")}
        style={{
          top: `calc(-10% + ${index * 25}px)`,
          scale,
          background: color,
        }}
      >
        Hello
      </motion.div>
    </div>
  );
};

export default Showcase;
