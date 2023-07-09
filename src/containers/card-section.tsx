import cardImg1 from "@/assets/card-img1.png";
import cardImg2 from "@/assets/card-img2.png";
import cardImg3 from "@/assets/card-img3.png";
import cardImg4 from "@/assets/card-img4.png";
import { FC } from "react";

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
  return (
    <section>
      {/* <Typography varient="h2" className="text-center">
        This is card Section
      </Typography> */}

      <div>
        {/* {cards.map((card) => (
          <div key={card.id}>
            <Image src={card.image} alt="" />
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default CardSection;
