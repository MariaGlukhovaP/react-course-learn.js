import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Reviews } from "./reviews";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviews } from "../../redux/entities/reviews/get-reviews";

export const ReviewsContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getReviews, restaurantId);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }
  const { reviews } = restaurant;

  return <Reviews reviews={reviews} />;
};
