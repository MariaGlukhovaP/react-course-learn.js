import { getRestaurant } from "../../services/get-restaurant-by-id";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = async ({ restaurantId }) => {
  const restaurant = await getRestaurant(restaurantId);

  if (!restaurant) return null;

  return <Restaurant name={restaurant.name} id={restaurantId} />;
};
