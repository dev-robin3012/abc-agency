import { useKeenSlider } from "keen-slider/react";
import type { FC } from "react";
import Testimomoal from "./testimonial";

interface Props {
  moveTo: "left" | "right";
  speed: number;
}

const Slider: FC<Props> = ({ moveTo = "left", speed = 50000 }) => {
  const animation = { duration: speed, easing: (t: number) => t };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: moveTo === "right",
    renderMode: "performance",
    drag: true,
    mode: "free",
    rubberband: true,
    slides: { perView: 2, spacing: 20 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="keen-slider" style={{ overflow: "visible" }} ref={sliderRef}>
      {new Array(10).fill("").map((_, i) => (
        <Testimomoal key={i} index={i + 1} />
      ))}
    </div>
  );
};

export default Slider;
