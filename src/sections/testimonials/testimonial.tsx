import Typography from "@/components/typography";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  index: number;
}

const Testimomoal: FC<Props> = ({ index }) => {
  return (
    <div className="keen-slider__slide bg-dark shadow-lg rounded-lg flex border relative">
      <span className="absolute top-5 right-5 text-7xl">&#x201D;</span>

      <Image
        src="https://thumbs.wbm.im/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg"
        alt=""
        width={130}
        height={200}
        className="h-full w-[130px]"
        sizes="130px"
      />

      <div className="p-5">
        <Typography.H5>Jhon Duo Smith</Typography.H5>
        <Typography.Text className="text-xs text-secondary">CEO, SDYG</Typography.Text>

        <Typography.Text className="mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cumque harum, consectetur
          unde quae odio delectus voluptatibus. Ipsum ipsa reiciendis a officiis nemo.
        </Typography.Text>
      </div>
    </div>
  );
};

export default Testimomoal;
