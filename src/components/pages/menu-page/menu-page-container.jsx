import { getDishes } from "../../../services/get-dishes-by-restaurant-id";
import { MenuPage } from "./menu-page";

export const MenuPageContainer = async ({ params }) => {
  const { restaurantId } = await params;

  const menu = await getDishes(restaurantId);
  return <MenuPage menu={menu} />;
};
