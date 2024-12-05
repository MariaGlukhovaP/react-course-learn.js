import { useParams } from "react-router-dom";
import { DishContainer } from "../dish/dish-container";

import styles from "./dish-page.module.css";

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <div className={styles.dishPage}>
      <DishContainer id={dishId} />
    </div>
  );
};
