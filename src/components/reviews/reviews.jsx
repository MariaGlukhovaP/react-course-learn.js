import { useAuth } from "../auth-context/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { ReviewContainer } from "../review/review-container";

import styles from "./../cards-container/cards-container.module.css";

export const Reviews = ({ reviews }) => {
  const { auth } = useAuth();

  return (
    <section className={styles.cardsSectionContainer}>
      <ul className={styles.cardsContainer}>
        {reviews?.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer id={reviewId} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && <ReviewForm />}
    </section>
  );
};
