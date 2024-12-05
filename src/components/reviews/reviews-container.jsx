import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Reviews } from "./reviews";

export const ReviewsContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { reviews } = restaurant;

  if (!reviews) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
