import { useAuth } from "../auth-context/use-auth";
import { Card } from "../card/card";
import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ name, ingredients, price, id }) => {
  const { auth } = useAuth();

  return (
    <Card
      cardTitle={name}
      cardFirstRowItem={ingredients.join(", ")}
      cardSecondRowItem={`${price}$`}
      cardSideItem={auth.isAuthorized && <DishCounter id={id} />}
    />
  );
};
