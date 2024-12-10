import { useParams } from "react-router-dom";
import styles from "./dish-page.module.css";
import { DishContainer } from "../../components/dish/dish-container";

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <div className={styles.dishPage}>
      <DishContainer dishId={dishId} />
    </div>
  );
};
