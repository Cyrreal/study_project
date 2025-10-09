import type { FC } from "react";
import S from "./TabsBlock.module.css";

type TabProps = {
  name: string;
  onClick: (arg: string) => void;
};

export const Tab: FC<TabProps> = ({ name, onClick }) => {
  return (
    <div className={S.tabContainer} onClick={() => onClick(name)}>
      <p className={S.restaurantName}>{name}</p>
    </div>
  );
};
