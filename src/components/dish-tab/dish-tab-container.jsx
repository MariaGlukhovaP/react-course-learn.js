import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishTab } from "./dish-tab";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";

export const DishTabContainer = ({ dishId }) => {
  const requestStatus = useRequest(getDishById, dishId);

  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <DishTab dishId={dishId} name={name} />;
};
