import { RestaurantsTabs } from "./restaurants-tabs";
import { getRestaurants } from "../../services/get-restaurants";

export const RestaurantsTabsContainer = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return <RestaurantsTabs restaurants={restaurants} />;
};
