import React, { type FC } from "react";
import S from "./MenuBlock.module.css";
import { Counter } from "../../../../components/Counter/Counter";

type MenuBlockProps = {
  name: string;
  price: number;
};

export const MenuBlock: FC<MenuBlockProps> = ({ name, price }) => {
  return (
    <div className={S.menuPosition}>
      <p className={S.name}>{name}</p>
      <Counter />
      <p>{price} $</p>
    </div>
  );
};
