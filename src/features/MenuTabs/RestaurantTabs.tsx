import { useState, type FC } from "react";
import S from "./RestaurantTabs.module.css";
import { restaurants } from "../../constants";
import { Tab } from "./components/Tab/Tabs.block";
import { MenuBlock } from "./components/MenuBlock/MenuBlock";

export const RestaurantTabs: FC = () => {
  const [restaurant, setRestaurant] = useState<string>("Dishoom");
  const filteredRestaurant = restaurants.filter(
    (item) => item.name === restaurant
  )[0];

  const handleRestaurantChange = (name: string) => {
    if (restaurant === name) return;
    setRestaurant(name);
  };

  return (
    <div className={S.mainContainer}>
      <div className={S.tabsContainer}>
        {restaurants.map(({ id, name }) => (
          <Tab key={id} name={name} onClick={handleRestaurantChange} />
        ))}
      </div>
      <div className={S.menuContainer}>
        {filteredRestaurant.menu.map(({ name, price, id }) => (
          <MenuBlock key={id} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};
