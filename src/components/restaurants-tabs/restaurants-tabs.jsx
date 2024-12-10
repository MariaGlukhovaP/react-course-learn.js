import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import styles from "./restaurants-tabs.module.css";

export const RestaurantsTabs = ({ restaurantsIds }) => {
  return (
    <div className={styles.restaurantsTabsContainer}>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer key={id} id={id} />
      ))}
    </div>
  );
};
