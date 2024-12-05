import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/UI/cart/cart-slice";
import { CartItem } from "../cart-item/cart-item";

import styles from "./cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      <ul className={styles.cartItems}>
        {items.map(({ id }) => (
          <li key={id}>
            <CartItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
