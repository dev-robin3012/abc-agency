import companiesLogo from "@/assets/companies.png";
import Typography from "@/components/typography";
import Image from "next/image";
import type { FC } from "react";

const PartnersSection: FC = () => {
  return (
    <section className="my-[120px] container mx-auto">
      <Typography.H4 className="text-primary text-center">
        Trusted by Top-tier product campanies
      </Typography.H4>

      <Image src={companiesLogo} alt="" className="mt-12 mx-auto" />
    </section>
  );
};

export default PartnersSection;
