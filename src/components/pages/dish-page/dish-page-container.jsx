import { getDish } from "../../../services/get-dish-by-id";
import { DishPage } from "./dish-page";

export const DishPageContainer = async ({ params }) => {
  const { dishId } = await params;

  const dish = await getDish(dishId);

  return <DishPage dish={dish} />;
};
