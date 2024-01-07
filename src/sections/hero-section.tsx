"use client";

import Button from "@/components/button";
import Typography from "@/components/typography";
import { motion } from "framer-motion";
import type { FC } from "react";

const HeroSection: FC = () => {
  // const [imageAngle, setImageAngle] = useState(12);
  // const testRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const box = testRef.current?.getBoundingClientRect();
  //     // @ts-ignore
  //     const angle = Math.floor(box?.y / 150) * 2;

  //     Math.sign(angle) >= 0 ? setImageAngle(angle) : setImageAngle(0);
  //   });
  // }, []);

  return (
    <section className="text-center min-h-[75vh] flex items-center justify-center">
      <div className="space-y-10">
        <Typography varient="h1">
          <motion.span
            initial={{ y: "-500px" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 150 }}
            className="block"
          >
            <motion.span
              animate={{ color: ["#ffffff", "#90E900", "#ffffff"] }}
              transition={{
                delay: 2,
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 5,
              }}
            >
              Innovative Solutions
            </motion.span>
          </motion.span>

          <span className="flex items-center justify-center gap-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, stiffness: 120 }}
            >
              for a
            </motion.span>
            <motion.span
              initial={{ x: "300%" }}
              animate={{ x: 0 }}
              transition={{ delay: 1.5, duration: 1, type: "tween", stiffness: 100 }}
              className="-z-10"
            >
              <motion.span
                animate={{ color: ["#ffffff", "#EFE600", "#ffffff"] }}
                transition={{
                  delay: 4.5,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
              >
                Digital World
              </motion.span>
            </motion.span>
          </span>

          <motion.span
            initial={{ x: "-150%" }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 1, type: "tween", stiffness: 100 }}
            className="block"
          >
            <motion.span
              animate={{ color: ["#ffffff", "#90E900", "#EFE600", "#ffffff"] }}
              transition={{
                delay: 7,
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 5,
              }}
            >
              Trusted Agency
            </motion.span>
          </motion.span>
        </Typography>

        <Typography varient="h4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Elevate Your Brand: Powerhouse Agency for Impactful Strategies
          </motion.span>
        </Typography>

        <div className="flex items-center gap-6 justify-center">
          <Button>Our Services</Button>
          <Button>Work With Us</Button>
        </div>
      </div>

      {/* <div
        className="transition-all duration-700"
        ref={testRef}
        style={{ transform: `perspective(500px) rotateX(${imageAngle}deg)` }}
      >
        <Image src={heroImage} alt="" className="mx-auto" />
      </div> */}
    </section>
  );
};

export default HeroSection;
