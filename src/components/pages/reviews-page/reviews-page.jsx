"use client";

import { Reviews } from "../../reviews/reviews";

export const ReviewsPage = ({ reviews, restaurantId }) => {
  return (
    <div>
      <Reviews restaurantId={restaurantId} reviews={reviews} />
    </div>
  );
};
