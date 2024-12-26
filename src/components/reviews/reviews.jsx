import { useAuth } from "../auth-context/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

import styles from "./../cards-container/cards-container.module.css";

export const Reviews = ({ reviews, restaurantId }) => {
  const { auth } = useAuth();

  const { isAuthorized, id } = auth;

  return (
    <section className={styles.cardsSectionContainer}>
      <ul className={styles.cardsContainer}>
        {reviews.map(({ text, userId, id, rating }) => (
          <li key={id}>
            <Review userId={userId} text={text} rating={rating} />
          </li>
        ))}
      </ul>
      {isAuthorized && <ReviewForm userId={id} restaurantId={restaurantId} />}
    </section>
  );
};
