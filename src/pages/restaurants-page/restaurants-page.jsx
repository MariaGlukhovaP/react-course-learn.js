import { Outlet } from "react-router-dom";
import styles from "./restaurants-page.module.css";
import { RestaurantsTabsContainer } from "../../components/restaurants-tabs/restaurants-tabs-container";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);

  return (
    <div className={styles.restaurantPage}>
      <RestaurantsTabsContainer />

      <Outlet />
    </div>
  );
};
