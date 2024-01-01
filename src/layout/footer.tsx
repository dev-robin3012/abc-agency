import logo from "@/assets/Logo.png";
import Typography from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-[120px] flex items-center justify-between container mx-auto">
      <div className="space-y-10">
        <Image src={logo} alt="logo" className="h-20 w-36" />
        <Typography varient="h5">
          © 2023 <span className="text-primary">abc.</span> All rights reserved.
        </Typography>
      </div>
      <div className="space-y-6">
        <Typography varient="h5">
          <span className="text-secondary uppercase">London</span> <br />
          <span>20-22 Wenlock Road, London, N1 7GU</span>
        </Typography>
        <Typography varient="h5" className="text-primary">
          +44 207 1188550
        </Typography>
        <Typography varient="h5">career@lemonhive.com</Typography>
      </div>

      <ul className="space-y-3 [&>li]:text-xl">
        <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition-all">
          Facebook
        </li>
        <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition-all">
          Twitter
        </li>
        <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition-all">
          Linkedin
        </li>
        <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition-all">
          Instagram
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
