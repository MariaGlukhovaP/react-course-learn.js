import { getRestaurant } from "../../../services/get-restaurant-by-id";
import MenuPage from "./menu/page";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const { name } = await getRestaurant(restaurantId);

  return { title: name };
};

export default MenuPage;
