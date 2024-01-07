import CustomLink from "@/components/link";
import { motion } from "framer-motion";
import type { FC } from "react";

interface Props {
  label: string;
  href?: string;
}

const NavLink: FC<Props> = ({ label, href = "" }) => {
  return (
    <motion.div className="font-semibold cursor-pointer px-10 py-2.5">
      <CustomLink label={label} href={href} />
    </motion.div>
  );
};

export default NavLink;
