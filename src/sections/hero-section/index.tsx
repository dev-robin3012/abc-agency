import heroImage from "@/assets/hero-image.png";
import Button from "@/components/button";
import Container from "@/components/container";
import Icon from "@/components/icons";
import Typography from "@/components/typography";
import cn from "@/utils/className-merge";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { type FC } from "react";

const HeroSection: FC = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [25, -25]);
  const rotateY = useTransform(x, [0, 400], [-25, 25]);

  const handleMouse = (e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section className="h-[85vh] flex items-end justify-center group">
      <Container className="overflow-x-hidden flex flex-col xl:flex-row gap-5 xl:gap-0 items-stretch justify-between py-5">
        <div className="space-y-10">
          <Typography.Hero>
            <motion.span
              initial={{ y: "-500px" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 150 }}
              className="block leading-none"
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

            <span className="space-x-2 md:space-x-5">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1, stiffness: 120 }}
              >
                for a
              </motion.span>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 120 }}
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
              className="block leading-none"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 2, duration: 1, type: "tween" }}
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              Elevate Your Brand Powerhouse Agency for Impactful Strategies
            </motion.span>
          </Typography.H4>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="space-x-6"
          >
            <Button variant="outline">Our Services</Button>
            <Button icon={<Icon name="arrowRight" />}>Work With Us</Button>
          </motion.div>
        </div>

        <motion.div
          className={cn(
            "transition-all duration-700 ease-in-out flex items-center justify-center p-5"
          )}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            x.set(200);
            y.set(200);
          }}
          style={{ perspective: 400 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 150 }}
            style={{ rotateX, rotateY }}
            className="transition-all duration-100"
          >
            <Image src={heroImage} alt="" height={500} width={500} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
