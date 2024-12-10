import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./restaurant-tab.module.css";

export const RestaurantTab = ({ id, title }) => {
  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.activeLink)
      }
    >
      {title}
    </NavLink>
  );
};
