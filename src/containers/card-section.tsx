"use client";

import cardImg1 from "@/assets/card-img1.png";
import cardImg2 from "@/assets/card-img2.png";
import cardImg3 from "@/assets/card-img3.png";
import cardImg4 from "@/assets/card-img4.png";
import Typography from "@/components/typography";
import "animate.css";
import Image from "next/image";
import { FC, useState } from "react";

const cards = [
  {
    id: "1",
    title: "Pre-processing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti ab fugiat hic, numquam quos eos? Officiis sint in ut voluptate illo. Quis quaerat iusto iure ducimus, in consequatur. Vitae!",
    image: cardImg1,
  },
  {
    id: "2",
    title: "Pre-processing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti ab fugiat hic, numquam quos eos? Officiis sint in ut voluptate illo. Quis quaerat iusto iure ducimus, in consequatur. Vitae!",
    image: cardImg2,
  },
  {
    id: "3",
    title: "Pre-processing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti ab fugiat hic, numquam quos eos? Officiis sint in ut voluptate illo. Quis quaerat iusto iure ducimus, in consequatur. Vitae!",
    image: cardImg3,
  },
  {
    id: "4",
    title: "Pre-processing",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti ab fugiat hic, numquam quos eos? Officiis sint in ut voluptate illo. Quis quaerat iusto iure ducimus, in consequatur. Vitae!",
    image: cardImg4,
  },
];

const CardSection: FC = () => {
  const [state, setState] = useState({
    next: 2,
    active: 1,
    prev: 0,
  });

  const handleNext = () => {
    if (state.active < cards.length) {
      setState(({ next, active, prev }) => ({
        next: next < cards.length ? next + 1 : 1,
        active: active + 1,
        prev: active,
      }));
    }
  };

  const handlePre = () => {
    state.active > 1 &&
      setState((pre) => ({ next: pre.active, active: pre.active - 1, prev: pre.active + 1 }));
  };

  return (
    <section
      className="relative overflow-hidden py-[120px] h-[1000px] flex items-center justify-center"
      onWheel={(e) => (e.deltaY > 0 ? handleNext() : handlePre())}
    >
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`py-20 px-14 absolute rounded-3xl w-10/12 flex items-center justify-center gap-10 animate__animated mx-auto ${
            idx + 1 === state.active
              ? "bottom-10 border border-primary z-40 scale-110 bg-dark [&>div>h1]:text-[#D3F699] [&>div>h2]:text-primary animate__zoomInDown"
              : idx + 1 === state.prev
              ? "animate__backOutDown bg-inherit border"
              : idx + 1 === state.next
              ? "animate__backInDown top-5 bg-inherit border border-[#E9EAEC33] [&>div>h1]:text-[#E9EAEC33]"
              : "hidden"
          }`}
        >
          <div className="space-y-10">
            <Typography varient="h1">{idx + 1}</Typography>
            <Typography varient="h2">{card.title}</Typography>
            <Typography>{card.content}</Typography>
          </div>

          <Image src={card.image} alt="" className="h-[509px] w-[445px]" />
        </div>
      ))}
    </section>
  );
};

export default CardSection;
