import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/UI/cart/cart-slice";

export const DishCounter = ({ id }) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  return <Counter increase={increase} decrease={decrease} value={amount} />;
};
