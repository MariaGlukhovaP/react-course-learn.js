import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";
import { Review } from "./review";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) return null;

  const { userId, text, rating } = review;

  return <Review userId={userId} text={text} rating={rating} />;
};
