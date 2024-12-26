import { getReviews } from "../../../services/get-reviews-by-restaurant-id";
import { ReviewsPage } from "./reviews-page";

export const ReviewsPageContainer = async ({ params }) => {
  const { restaurantId } = await params;

  const reviews = await getReviews(restaurantId);

  return <ReviewsPage reviews={reviews} restaurantId={restaurantId} />;
};
