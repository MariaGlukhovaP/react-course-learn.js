import styles from "./description.module.css";

export const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.backgroundImg}></div>
      <div className={styles.descriptionText}>
        <h1>Order Food</h1>
        <h3>From 175 Restaurants</h3>
      </div>
    </div>
  );
};
