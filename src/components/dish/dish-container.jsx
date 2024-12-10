import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { Dish } from "./dish";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const requestStatus = useRequest(getDishById, dishId);

  if (!dish) return null;

  const { name, ingredients, price } = dish;

  return (
    <Dish name={name} ingredients={ingredients} price={price} dishId={dishId} />
  );
};
