import { Menu } from "./menu";
import { getDishes } from "../../services/get-dishes-by-restaurant-id";

export const MenuContainer = async ({ restaurantId }) => {
  const menu = await getDishes(restaurantId);

  if (!menu.length) {
    return null;
  }

  return <Menu menu={menu} />;
};
