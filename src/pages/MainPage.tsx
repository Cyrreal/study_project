import { Layout } from "../features/MenuTabs/components/Layout/Layout";
import { RestaurantTabs } from "../features/MenuTabs/RestaurantTabs";

export const MainPage = () => {
  return (
    <Layout>
      <RestaurantTabs />
    </Layout>
  );
};
