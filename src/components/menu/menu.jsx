import { DishTabContainer } from "../dish-tab/dish-tab-container";

import styles from "./../cards-container/cards-container.module.css";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.cardsSectionContainer}>
      <ul className={styles.cardsContainer}>
        {menu?.map((dishId) => (
          <li key={dishId}>
            <DishTabContainer dishId={dishId} />
          </li>
        ))}
      </ul>
    </section>
  );
};
