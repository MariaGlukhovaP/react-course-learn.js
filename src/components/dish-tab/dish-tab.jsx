import { Link } from "react-router-dom";

import styles from "./dish-tab.module.css";

export const DishTab = ({ dishId, name }) => {
  return (
    <Link className={styles.link} to={`/dish/${dishId}`}>
      {name}
    </Link>
  );
};
