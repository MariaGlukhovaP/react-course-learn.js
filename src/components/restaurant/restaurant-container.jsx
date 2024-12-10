import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { PENDING, REJECTED } from "../../redux/UI/request/request-statuses";

export const RestaurantContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getRestaurantById, restaurantId);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (requestStatus === REJECTED) {
    return "error";
  }

  if (requestStatus === PENDING) {
    return "...loading";
  }

  if (!restaurant) return null;

  const { name } = restaurant;

  return <Restaurant name={name} />;
};
