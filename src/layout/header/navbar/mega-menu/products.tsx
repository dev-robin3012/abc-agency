import type { FC } from "react";
import MegaMenu from ".";

const ProductsMenu: FC = () => {
  return (
    <MegaMenu>
      <div className="p-5 bg-primary-light rounded-lg">
        <p className="p-5 bg-dark rounded-md flex gap-5">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque aperiam officiis
            expedita temporibus, minima voluptatibus cupiditate, exercitationem eius et atque
            laudantium pariatur perferendis eos debitis non esse? Saepe, iusto!
          </span>
          <span>
            Veritatis velit, cupiditate explicabo eaque distinctio libero facere, voluptate ab saepe
            quidem quis ipsa vel illo natus nostrum tenetur provident omnis praesentium corrupti?
            Voluptatem laborum cupiditate quasi porro a repudiandae.
          </span>
        </p>
      </div>
    </MegaMenu>
  );
};

export default ProductsMenu;
