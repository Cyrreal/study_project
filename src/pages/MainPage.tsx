import { Layout } from "../features/MenuTabs/components/Layout/Layout";
import { RestaurantTabs } from "../features/MenuTabs/RestaurantTabs";
import { Reviews } from "../features/Reviews/Reviews";
import { ScrollProgressBar } from "../features/ScrollBar/ScrollBar";

export const MainPage = () => {
  return (
    <Layout>
      <ScrollProgressBar />
      <RestaurantTabs />
      <Reviews />
      <RestaurantTabs />
      <RestaurantTabs />
      <RestaurantTabs />
      <RestaurantTabs />
      <RestaurantTabs />
    </Layout>
  );
};
