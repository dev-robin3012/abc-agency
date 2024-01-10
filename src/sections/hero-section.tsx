"use client";

import Button from "@/components/button";
import Container from "@/components/container";
import Icon from "@/components/icons";
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
      <Container className="space-y-10 overflow-x-hidden py-10">
        <Typography.Hero>
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

          <span className="flex items-center justify-center gap-2 md:gap-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, stiffness: 120 }}
            >
              for a
            </motion.span>
            <motion.span
              initial={{ x: "100vw" }}
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
            initial={{ x: "-100%" }}
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
        </Typography.Hero>

        <Typography.H4>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
            Elevate Your Brand Powerhouse Agency for Impactful Strategies
          </motion.span>
        </Typography.H4>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="flex items-center gap-6 justify-center"
        >
          <Button variant="outline">Our Services</Button>
          <Button icon={<Icon name="arrowRight" />}>Work With Us</Button>
        </motion.div>
      </Container>

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
