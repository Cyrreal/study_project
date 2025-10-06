import { createRoot } from "react-dom/client";
import { restaurants } from "./constants.ts";

createRoot(document.getElementById("root")!).render(
  <div>
    {restaurants.map((restaurant) => {
      return (
        <>
          <div>{restaurant.name}</div>
          <div>Menu</div>
          <ul>
            {restaurant.menu.map((item) => (
              <li key={item.id}>
                {item.name}: {item.price}
              </li>
            ))}
          </ul>
          <div>Reviews</div>
          <ul>
            {restaurant.reviews.map((item) => (
              <li key={item.id}>
                {item.user}: {item.text}
              </li>
            ))}
          </ul>
        </>
      );
    })}
  </div>
);
