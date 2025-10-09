import React, { useState, type FC } from "react";
import S from "./MenuBlock.module.css";

type MenuBlockProps = {
  name: string;
  price: number;
};

export const MenuBlock: FC<MenuBlockProps> = ({ name, price }) => {
  const [dishCount, setDishCount] = useState<number>(0);

  const handleIncrementClick = () => {
    if (dishCount < 5) setDishCount((prev) => prev + 1);
    return;
  };

  const handleDecrementClick = () => {
    if (dishCount > 0) setDishCount((prev) => prev - 1);
    return;
  };

  return (
    <div className={S.menuPosition}>
      <p className={S.name}>{name}</p>
      <div className={S.dishCounter}>
        <button className={S.button} onClick={handleIncrementClick}>
          +
        </button>
        {dishCount}
        <button className={S.button} onClick={handleDecrementClick}>
          -
        </button>
      </div>
      <p>{price} $</p>
    </div>
  );
};
