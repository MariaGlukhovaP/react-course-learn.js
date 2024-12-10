import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../../components/reviews/reviews-container";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <ReviewsContainer restaurantId={restaurantId} />
    </div>
  );
};
