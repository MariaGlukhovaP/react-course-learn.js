import { useAuth } from "../auth-context/use-auth";
import { Card } from "../card/card";
import { DishCounter } from "../dish-counter/dish-counter";
import { Subtitle } from "../subtitle/subtitle";

import styles from "./../cards-container/cards-container.module.css";

export const Menu = ({ menu }) => {
  const { isAuthed, user } = useAuth();

  return (
    <section>
      <Subtitle subtitle="Menu" />
      <ul className={styles.cardsContainer}>
        {menu.map(({ id, name, price, ingredients }) => (
          <li key={id}>
            <Card
              cardTitle={name}
              cardFirstRowItem={ingredients.join(", ")}
              cardSecondRowItem={`${price}$`}
              cardSideItem={isAuthed(user) && <DishCounter />}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
