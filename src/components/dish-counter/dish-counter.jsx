import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/UI/cart/cart-slice";

export const DishCounter = ({ dishId }) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectCartItemAmountById(state, dishId)) || 0;

  const increase = () => dispatch(addToCart(dishId));
  const decrease = () => dispatch(removeFromCart(dishId));

  return <Counter increase={increase} decrease={decrease} value={amount} />;
};
