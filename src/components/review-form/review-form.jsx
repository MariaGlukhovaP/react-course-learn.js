import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";
import classNames from "classnames";
import { Button } from "../button/button";

export const ReviewForm = ({ onAddReview, userId }) => {
  const { form, setText, increase, decrease, clear } = useForm();
  const { text, rating } = form;

  return (
    <div className={styles.formSectionContainer}>
      <h4 className={styles.formTitle}>Leave your review</h4>
      <form
        className={styles.formContainer}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.formItem}>
          <span className={styles.inputTitle}>Review</span>
          <textarea
            className={classNames(styles.textarea, styles.formInput)}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className={styles.formItem}>
          <span className={styles.inputTitle}>Rating</span>
          <Counter value={rating} increase={increase} decrease={decrease} />
        </div>

        <Button
          text="Submit"
          buttonType={styles.submit}
          onClick={() => onAddReview({ text, rating, userId })}
        />
        <Button text="Clear" buttonType={styles.submit} onClick={clear} />
      </form>
    </div>
  );
};
