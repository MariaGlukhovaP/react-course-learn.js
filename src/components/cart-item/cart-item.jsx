import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishCounter } from "../dish-counter/dish-counter";

import styles from "./cart-item.module.css";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish.name) {
    return null;
  }

  return (
    <div className={styles.cartItem}>
      <p>{dish.name}</p>
      <DishCounter id={id} />
      <p className={styles.price}>{`${dish.price}$`}</p>
    </div>
  );
};
