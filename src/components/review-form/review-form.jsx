import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";
import classNames from "classnames";
import { Button } from "../button/button";

export const ReviewForm = () => {
  const { form, setName, setText, increase, decrease, clear } = useForm();
  const { name, text, rating } = form;

  return (
    <div className={styles.formSectionContainer}>
      <h4 className={styles.formTitle}>Leave your review</h4>
      <form
        className={styles.formContainer}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.formItem}>
          <span className={styles.inputTitle}>Name</span>
          <input
            className={classNames(styles.nameInput, styles.formInput)}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

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

        <Button text="Submit" buttonType={styles.submit} onClick={clear} />
      </form>
    </div>
  );
};
