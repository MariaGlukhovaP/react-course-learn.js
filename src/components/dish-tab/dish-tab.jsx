import { Link } from "react-router-dom";

import styles from "./dish-tab.module.css";

export const DishTab = ({ id, name }) => {
  return (
    <Link className={styles.link} to={`/dish/${id}`}>
      {name}
    </Link>
  );
};
