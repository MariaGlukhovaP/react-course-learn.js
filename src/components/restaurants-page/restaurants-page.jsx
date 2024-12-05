import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { Outlet } from "react-router-dom";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div className={styles.restaurantPage}>
      <div className={styles.restaurantsTabsContainer}>
        {restaurantsIds?.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
