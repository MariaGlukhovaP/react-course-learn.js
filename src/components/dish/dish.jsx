import { useAuth } from "../auth-context/use-auth";
import { Card } from "../card/card";
import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ dish }) => {
  const { auth } = useAuth();

  const { name, ingredients, price, id } = dish;

  return (
    <Card
      cardTitle={name}
      cardFirstRowItem={ingredients?.join(", ")}
      cardSecondRowItem={`${price}$`}
      cardSideItem={auth.isAuthorized && <DishCounter dishId={id} />}
    />
  );
};
