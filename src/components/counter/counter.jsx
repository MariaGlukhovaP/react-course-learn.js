import { Button } from "../button/button";

import styles from "./counter.module.css";

export const Counter = ({ increase, decrease, value }) => {
  return (
    <div className={styles.counterContainer}>
      <Button text="+" buttonType={styles.counter} onClick={increase} />
      <span>{value}</span>
      <Button text="-" buttonType={styles.counter} onClick={decrease} />
    </div>
  );
};
