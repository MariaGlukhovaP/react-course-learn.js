import { Outlet, useParams } from "react-router-dom";
import { RestaurantContainer } from "../../components/restaurant/restaurant-container";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <RestaurantContainer restaurantId={restaurantId} />
      <Outlet />
    </div>
  );
};
