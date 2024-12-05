import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../reviews/reviews-container";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <ReviewsContainer id={restaurantId} />
    </div>
  );
};
