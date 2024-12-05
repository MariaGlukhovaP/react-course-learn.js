import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./restaurant.module.css";

export const Restaurant = ({ name }) => {
  return (
    <section className={styles.restaurantContainer}>
      <h2 className={styles.restaurantName}>{name}</h2>
      <div className={styles.reataurantTabs}>
        <NavLink
          className={({ isActive }) =>
            classNames(styles.link, isActive && styles.activeLink)
          }
          to={"menu"}
        >
          Menu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            classNames(styles.link, isActive && styles.activeLink)
          }
          to={"reviews"}
        >
          Reviews
        </NavLink>
      </div>
    </section>
  );
};
