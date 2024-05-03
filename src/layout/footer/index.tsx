import logo from "@/assets/Logo.png";
import Container from "@/components/container";
import Icon from "@/components/icons";
import Typography from "@/components/typography";
import Image from "next/image";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="pb-10 pt-20 bg-dark">
      <Container className="space-y-5">
        <Image src={logo} alt="logo" className="h-16 w-32" />

        <div className="grid grid-cols-3 gap-10">
          <div className="space-y-3">
            <Typography.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever.
            </Typography.Text>

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <Icon name="call" className="text-lg" />
                <Typography.Text>0123456789</Typography.Text>
              </div>

              <div className="flex items-center gap-3">
                <Icon name="schedule" className="text-lg" />
                <Typography.Text>Mon - Sat 8.00 - 18.00</Typography.Text>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
              <li>Lorem ipsum</li>
              <li>Doller sit</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Typography.Text>
              Send your email to get latest updates & services of our newsletter
            </Typography.Text>

            <div className="rounded-md overflow-hidden flex items-stretch border-2 border-primary">
              <input
                type="email"
                placeholder="Hello World"
                className="text-dark bg-primary px-3 py-2 flex-1 text-base"
              />
              <span className="px-5 cursor-pointer flex items-center justify-center hover:text-primary transition-colors">
                <Icon name="mail-send" className="text-2xl" />
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <Typography.H5 className="text-center">
            Copyright © 2023 <span className="text-primary">Robin.</span> All rights reserved.
          </Typography.H5>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
