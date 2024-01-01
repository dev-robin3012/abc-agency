import companiesLogo from "@/assets/companies.png";
import Typography from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

const PartnersSection: FC = () => {
  return (
    <section className="my-[120px] container mx-auto">
      <Typography varient="h4" className="text-primary text-center">
        Trusted by Top-tier product campanies
      </Typography>

      <Image src={companiesLogo} alt="" className="mt-12 mx-auto" />
    </section>
  );
};

export default PartnersSection;
