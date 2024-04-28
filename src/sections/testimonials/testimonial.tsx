import type { FC } from "react";

interface Props {
  index: number;
}

const Testimomoal: FC<Props> = ({ index }) => {
  return (
    <div className="p-5 bg-dark shadow-lg rounded-lg min-w-[400px] border keen-slider__slide">
      <h2>Testiimonial Card </h2>
      <h2>{index}</h2>
    </div>
  );
};

export default Testimomoal;
